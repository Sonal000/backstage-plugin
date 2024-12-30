'use strict';

var backendPluginApi = require('@backstage/backend-plugin-api');
var router = require('./service/router.cjs.js');

const dqlPlugin = backendPluginApi.createBackendPlugin({
  pluginId: "dynatrace-dql",
  register(env) {
    env.registerInit({
      deps: {
        logger: backendPluginApi.coreServices.logger,
        config: backendPluginApi.coreServices.rootConfig,
        discovery: backendPluginApi.coreServices.discovery,
        http: backendPluginApi.coreServices.httpRouter,
        auth: backendPluginApi.coreServices.auth
      },
      async init({ http, config, logger, discovery, auth }) {
        http.use(
          await router.createRouter({
            config,
            logger,
            discovery,
            auth
          })
        );
      }
    });
  }
});

exports.dqlPlugin = dqlPlugin;
//# sourceMappingURL=plugin.cjs.js.map
