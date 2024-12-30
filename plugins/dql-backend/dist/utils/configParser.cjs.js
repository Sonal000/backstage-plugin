'use strict';

var dynatraceApi = require('../service/dynatraceApi.cjs.js');
require('@dynatrace/backstage-plugin-dql-common');
require('../service/queryExecutor.cjs.js');
require('@backstage/backend-defaults/rootHttpRouter');
require('@backstage/catalog-client');
require('express');
require('express-promise-router');

const defaultId = "unknown";
const getId = (url) => {
  try {
    const host = new URL(url).host;
    return host.substring(0, host.indexOf(".")) || defaultId;
  } catch (e) {
    return defaultId;
  }
};
const getIdentifier = (configArray) => {
  return btoa(
    configArray.map((envConfig) => getId(envConfig.get().url)).join(",")
  );
};
const parseEnvironments = (config, logger) => {
  const configArray = config.getConfigArray("dynatrace.environments");
  const identifier = getIdentifier(configArray);
  return configArray.map(
    (envConfig) => new dynatraceApi.DynatraceApi(
      envConfig.get(),
      identifier,
      logger
    )
  );
};
const parseCustomQueries = (config) => {
  const queryObjects = config.getOptionalConfigArray("dynatrace.queries") ?? [];
  return queryObjects.reduce((acc, queryObject) => {
    const queryId = queryObject.getOptionalString("id");
    const query = queryObject.getOptionalString("query");
    const environments = queryObject.getOptionalStringArray("environments");
    if (queryId && query) {
      acc[queryId] = { query, environments };
    }
    return acc;
  }, {});
};

exports.parseCustomQueries = parseCustomQueries;
exports.parseEnvironments = parseEnvironments;
//# sourceMappingURL=configParser.cjs.js.map
