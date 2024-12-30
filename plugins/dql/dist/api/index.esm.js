import { createApiRef } from '@backstage/core-plugin-api';
import '@backstage/errors';
import '@dynatrace/backstage-plugin-dql-common';

const dqlQueryApiRef = createApiRef({
  id: "plugin.dynatrace-dql.service"
});

export { dqlQueryApiRef };
//# sourceMappingURL=index.esm.js.map
