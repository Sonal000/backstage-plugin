'use strict';

var queries = require('./queries.cjs.js');
var queryCompiler = require('./queryCompiler.cjs.js');
var zod = require('zod');

const componentQueryVariablesSchema = zod.z.object({
  // see https://backstage.io/docs/features/software-catalog/descriptor-format#namespace-optional
  componentNamespace: zod.z.string().max(63).regex(/^[A-Za-z0-9\-]+$/),
  // see https://backstage.io/docs/features/software-catalog/descriptor-format#name-required
  componentName: zod.z.string().max(63).regex(/^[A-Za-z0-9\-_\.]+$/)
});
class QueryExecutor {
  constructor(apis, queries) {
    this.apis = apis;
    this.queries = queries;
  }
  filterApis = (apis, filterApis) => {
    return apis.filter(
      (api) => filterApis.includes(new URL(api.environmentUrl).host.split(".")[0])
    );
  };
  async executeCustomQuery(queryId, variables) {
    const dqlQueryConfig = this.queries[queryId];
    if (!dqlQueryConfig?.query) {
      throw new Error(`No custom query to the given id "${queryId}" found`);
    }
    const filteredApis = dqlQueryConfig.environments ? this.filterApis(this.apis, dqlQueryConfig.environments) : this.apis;
    componentQueryVariablesSchema.parse(variables);
    const results$ = filteredApis.map((api) => {
      const compiledQuery = queryCompiler.compileDqlQuery(dqlQueryConfig.query, {
        ...variables,
        environmentName: api.environmentName,
        environmentUrl: api.environmentUrl
      });
      return api.executeDqlQuery(compiledQuery);
    });
    const results = await Promise.all(results$);
    return results.flatMap((result) => result);
  }
  async executeCustomCatalogQueries(catalogQueries, variables) {
    componentQueryVariablesSchema.parse(variables);
    const results$ = catalogQueries.map(async (catalogQuery) => {
      const filteredApis = catalogQuery.environments ? this.filterApis(this.apis, catalogQuery.environments) : this.apis;
      const apiResultsPromises = filteredApis.map(async (api) => {
        const compiledQuery = queryCompiler.compileDqlQuery(catalogQuery.query, {
          ...variables,
          environmentName: api.environmentName,
          environmentUrl: api.environmentUrl
        });
        return await api.executeDqlQuery(compiledQuery);
      });
      const apiResults = await Promise.all(apiResultsPromises);
      return {
        title: catalogQuery.id,
        data: apiResults.flat()
      };
    });
    const queryResults = await Promise.all(results$);
    return queryResults;
  }
  async executeDynatraceQuery(queryId, entity) {
    if (!queries.isValidDynatraceQueryKey(queryId)) {
      throw new Error(`No Dynatrace query to the given id "${queryId}" found`);
    }
    const results$ = this.apis.map(
      (api) => api.executeDqlQuery(queries.dynatraceQueries[queryId](entity, api))
    );
    const results = await Promise.all(results$);
    return results.flatMap((result) => result);
  }
}

exports.QueryExecutor = QueryExecutor;
//# sourceMappingURL=queryExecutor.cjs.js.map
