import { dqlQueryApiRef } from './api/index.esm.js';
import { rootRouteRef } from './routes.esm.js';
import { createPlugin, createApiFactory, discoveryApiRef, createComponentExtension } from '@backstage/core-plugin-api';
import { DqlQueryApiClient } from './api/DqlQueryApiClient.esm.js';

const dqlQueryPlugin = createPlugin({
  id: "dynatrace-dql",
  apis: [
    createApiFactory({
      api: dqlQueryApiRef,
      deps: {
        discoveryApi: discoveryApiRef
      },
      factory: ({ discoveryApi }) => new DqlQueryApiClient({ discoveryApi })
    })
  ],
  routes: {
    root: rootRouteRef
  }
});
const EntityDqlQueryCard = dqlQueryPlugin.provide(
  createComponentExtension({
    name: "EntityDqlQueryCard",
    component: {
      lazy: () => import('./components/index.esm.js').then((m) => m.DqlQuery)
    }
  })
);
const EntityCatalogInfoQueryCard = dqlQueryPlugin.provide(
  createComponentExtension({
    name: "EntityCatalogInfoQueryCard",
    component: {
      lazy: () => import('./components/index.esm.js').then((m) => m.CatalogInfoQuery)
    }
  })
);
const EntityKubernetesDeploymentsCard = dqlQueryPlugin.provide(
  createComponentExtension({
    name: "EntityKubernetesDeploymentsCard",
    component: {
      lazy: () => import('./components/index.esm.js').then((m) => m.KubernetesDeployments)
    }
  })
);

export { EntityCatalogInfoQueryCard, EntityDqlQueryCard, EntityKubernetesDeploymentsCard, dqlQueryPlugin };
//# sourceMappingURL=plugin.esm.js.map
