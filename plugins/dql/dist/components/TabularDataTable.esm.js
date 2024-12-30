import { ObjectModal } from './ObjectModal.esm.js';
import { Table } from '@backstage/core-components';
import { TableTypes } from '@dynatrace/backstage-plugin-dql-common';
import { Link } from '@material-ui/core';
import React, { useMemo } from 'react';

const cellRenderer = (field) => {
  return (data) => {
    const cellData = data[field];
    if (cellData === void 0) {
      return "";
    }
    if (typeof cellData === "string") {
      return cellData;
    }
    if (cellData.type === TableTypes.OBJECT) {
      return /* @__PURE__ */ React.createElement(ObjectModal, { data: cellData.content, property: field });
    }
    if (cellData.type === TableTypes.LINK) {
      return /* @__PURE__ */ React.createElement(Link, { href: cellData.url, target: "_blank", rel: "noopener" }, cellData.text);
    }
    return JSON.stringify(cellData);
  };
};
const TabularDataTable = ({
  title,
  data,
  pageSize = 10
}) => {
  const columns = useMemo(() => {
    const keys = data.reduce((acc, row) => {
      for (const key in row) {
        acc.add(key);
      }
      return acc;
    }, /* @__PURE__ */ new Set());
    return Array.from(keys).map((key) => ({
      title: key,
      field: key,
      render: cellRenderer(key)
    }));
  }, [data]);
  return /* @__PURE__ */ React.createElement(
    Table,
    {
      title,
      options: { search: true, paging: true, pageSize },
      columns,
      data
    }
  );
};

export { TabularDataTable };
//# sourceMappingURL=TabularDataTable.esm.js.map
