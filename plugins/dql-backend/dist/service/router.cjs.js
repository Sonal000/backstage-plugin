'use strict';

var configParser = require('../utils/configParser.cjs.js');
var routeUtils = require('../utils/routeUtils.cjs.js');
var queryExecutor = require('./queryExecutor.cjs.js');
var rootHttpRouter = require('@backstage/backend-defaults/rootHttpRouter');
var catalogClient = require('@backstage/catalog-client');
var express = require('express');
var Router = require('express-promise-router');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }

var express__default = /*#__PURE__*/_interopDefaultCompat(express);
var Router__default = /*#__PURE__*/_interopDefaultCompat(Router);

const createRouter = async (options) => {
  const { config, discovery, logger, auth } = options;
  const apis = configParser.parseEnvironments(config, logger);
  const customQueries = configParser.parseCustomQueries(config);
  const queryExecutor$1 = new queryExecutor.QueryExecutor(apis, customQueries);
  const catalogClient$1 = new catalogClient.CatalogClient({ discoveryApi: discovery });
  const router = Router__default.default();
  router.use(express__default.default.json());
  router.get("/catalog", async (req, res) => {
    const entity = await routeUtils.getEntityFromRequest(req, catalogClient$1, auth);
    const extendedEntity = entity;
    const validatedQueries = routeUtils.validateQueries(extendedEntity);
    const result = await queryExecutor$1.executeCustomCatalogQueries(
      validatedQueries,
      {
        componentNamespace: entity.metadata.namespace ?? "default",
        componentName: entity.metadata.name
      }
    );
    return res.json(result);
  });
  router.get("/custom/:queryId", async (req, res) => {
    const entity = await routeUtils.getEntityFromRequest(req, catalogClient$1, auth);
    const result = await queryExecutor$1.executeCustomQuery(req.params.queryId, {
      componentNamespace: entity.metadata.namespace ?? "default",
      componentName: entity.metadata.name
    });
    return res.json(result);
  });
  router.get("/dynatrace/:queryId", async (req, res) => {
    const entity = await routeUtils.getEntityFromRequest(req, catalogClient$1, auth);
    const deployments = await queryExecutor$1.executeDynatraceQuery(
      req.params.queryId,
      entity
    );
    res.json(deployments);
  });
  router.use(rootHttpRouter.MiddlewareFactory.create({ logger, config }).error());
  return router;
};

exports.createRouter = createRouter;
//# sourceMappingURL=router.cjs.js.map
