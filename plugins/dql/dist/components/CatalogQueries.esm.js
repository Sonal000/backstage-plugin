import { InternalCatalogQueries } from './InternalCatalogQueries.esm.js';
import { EmptyState } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import React from 'react';

const CatalogInfoQuery = (props) => {
  const { entity } = useEntity();
  const extendedEntity = entity;
  const queries = extendedEntity.metadata.dynatrace?.queries ?? [];
  return /* @__PURE__ */ React.createElement(React.Fragment, null, queries.length > 0 ? /* @__PURE__ */ React.createElement(
    InternalCatalogQueries,
    {
      queryNamespace: "catalog",
      EmptyState: props.emptyState,
      pageSize: props.pageSize
    }
  ) : /* @__PURE__ */ React.createElement(
    EmptyState,
    {
      title: "No queries defined in catalog-info.yaml for this entity.",
      missing: "info",
      description: "You need to add queries for this entity in the catalog-info.yaml file."
    }
  ));
};

export { CatalogInfoQuery };
//# sourceMappingURL=CatalogQueries.esm.js.map
