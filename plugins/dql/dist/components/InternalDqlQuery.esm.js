import { useDqlQuery } from '../hooks/useDqlQuery.esm.js';
import { DqlEmptyState } from './DqlEmptyState.esm.js';
import { TabularDataTable } from './TabularDataTable.esm.js';
import { stringifyEntityRef } from '@backstage/catalog-model';
import { Progress, ResponseErrorPanel } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import React from 'react';

const InternalDqlQuery = ({
  title,
  queryNamespace,
  queryName,
  EmptyState = DqlEmptyState,
  pageSize
}) => {
  const { entity } = useEntity();
  const componentName = entity.metadata.name;
  const { error, loading, value } = useDqlQuery(
    queryNamespace,
    queryName,
    stringifyEntityRef(entity)
  );
  if (loading) {
    return /* @__PURE__ */ React.createElement(Progress, null);
  } else if (error) {
    return /* @__PURE__ */ React.createElement(ResponseErrorPanel, { error });
  }
  if (!value || value.length === 0) {
    return /* @__PURE__ */ React.createElement(
      EmptyState,
      {
        componentName,
        queryName,
        queryNamespace,
        additionalInformation: `${queryNamespace}.${queryName}` === "dynatrace.srg-validations" ? `# No Site Reliability Guardian resources
  No result received. If you don't use Site Reliability Guardians, do not hesitate to integrate them. 
  [View this for more information.](https://docs.dynatrace.com/docs/platform-modules/automations/site-reliability-guardian)
` : ""
      }
    );
  }
  return /* @__PURE__ */ React.createElement(TabularDataTable, { title, data: value, pageSize });
};

export { InternalDqlQuery };
//# sourceMappingURL=InternalDqlQuery.esm.js.map
