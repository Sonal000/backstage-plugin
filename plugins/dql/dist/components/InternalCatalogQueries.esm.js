import { useCatalogDqlQueries } from '../hooks/useCatalogDqlQueries.esm.js';
import { DqlEmptyState } from './DqlEmptyState.esm.js';
import { TabularDataTable } from './TabularDataTable.esm.js';
import { stringifyEntityRef } from '@backstage/catalog-model';
import { Progress, ResponseErrorPanel } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import React from 'react';

const InternalCatalogQueries = ({
  queryNamespace,
  EmptyState = DqlEmptyState,
  pageSize
}) => {
  const { entity } = useEntity();
  const componentName = entity.metadata.name;
  const { error, loading, value } = useCatalogDqlQueries(
    queryNamespace,
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
        queryName: "",
        queryNamespace,
        additionalInformation: "Please ensure that you have correctly defined queries in the catalog-info.yaml file."
      }
    );
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, value.map(
    (queryData, index) => queryData.data?.length > 0 ? /* @__PURE__ */ React.createElement(
      TabularDataTable,
      {
        key: index,
        data: queryData.data,
        title: queryData.title,
        pageSize
      }
    ) : /* @__PURE__ */ React.createElement(
      EmptyState,
      {
        key: index,
        componentName,
        queryName: queryData.title,
        queryNamespace
      }
    )
  ));
};

export { InternalCatalogQueries };
//# sourceMappingURL=InternalCatalogQueries.esm.js.map
