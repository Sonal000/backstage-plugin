/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { dynatraceQueries, isValidDynatraceQueryKey } from './queries';
import { compileDqlQuery } from './queryCompiler';
import { z } from 'zod';
const componentQueryVariablesSchema = z.object({
    // see https://backstage.io/docs/features/software-catalog/descriptor-format#namespace-optional
    componentNamespace: z
        .string()
        .max(63)
        .regex(/^[A-Za-z0-9\-]+$/),
    // see https://backstage.io/docs/features/software-catalog/descriptor-format#name-required
    componentName: z
        .string()
        .max(63)
        .regex(/^[A-Za-z0-9\-_\.]+$/),
});
export class QueryExecutor {
    apis;
    queries;
    constructor(apis, queries) {
        this.apis = apis;
        this.queries = queries;
    }
    filterApis = (apis, filterApis) => {
        return apis.filter((api) => filterApis.includes(new URL(api.environmentUrl).host.split('.')[0]));
    };
    async executeCustomQuery(queryId, variables) {
        const dqlQueryConfig = this.queries[queryId];
        if (!dqlQueryConfig?.query) {
            throw new Error(`No custom query to the given id "${queryId}" found`);
        }
        const filteredApis = dqlQueryConfig.environments
            ? this.filterApis(this.apis, dqlQueryConfig.environments)
            : this.apis;
        componentQueryVariablesSchema.parse(variables);
        const results$ = filteredApis.map(api => {
            const compiledQuery = compileDqlQuery(dqlQueryConfig.query, {
                ...variables,
                environmentName: api.environmentName,
                environmentUrl: api.environmentUrl,
            });
            return api.executeDqlQuery(compiledQuery);
        });
        const results = await Promise.all(results$);
        return results.flatMap(result => result);
    }
    async executeCustomCatalogQueries(catalogQueries, variables) {
        componentQueryVariablesSchema.parse(variables);
        const results$ = catalogQueries.map(async (catalogQuery) => {
            const filteredApis = catalogQuery.environments
                ? this.filterApis(this.apis, catalogQuery.environments)
                : this.apis;
            const apiResultsPromises = filteredApis.map(async (api) => {
                const compiledQuery = compileDqlQuery(catalogQuery.query, {
                    ...variables,
                    environmentName: api.environmentName,
                    environmentUrl: api.environmentUrl,
                });
                return await api.executeDqlQuery(compiledQuery);
            });
            const apiResults = await Promise.all(apiResultsPromises);
            return {
                title: catalogQuery.id,
                data: apiResults.flat(),
            };
        });
        const queryResults = await Promise.all(results$);
        return queryResults;
    }
    async executeDynatraceQuery(queryId, entity) {
        if (!isValidDynatraceQueryKey(queryId)) {
            throw new Error(`No Dynatrace query to the given id "${queryId}" found`);
        }
        const results$ = this.apis.map(api => api.executeDqlQuery(dynatraceQueries[queryId](entity, api)));
        const results = await Promise.all(results$);
        return results.flatMap(result => result);
    }
}
