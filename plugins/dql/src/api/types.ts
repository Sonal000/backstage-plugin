import { createApiRef } from '@backstage/core-plugin-api';
import { TabularData } from '@dynatrace/backstage-plugin-dql-common';

export interface DqlQueryApi {
  getData(
    namespace: string,
    queryName: string,
    component: string,
  ): Promise<TabularData>;
}

export const dqlQueryApiRef = createApiRef<DqlQueryApi>({
  id: 'plugin.dynatrace-dql.service',
});