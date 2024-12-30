import { InternalDqlQuery } from './InternalDqlQuery.esm.js';
import { ErrorPanel } from '@backstage/core-components';
import React from 'react';
import { z, ZodError } from 'zod';

const namespaceSchema = z.enum(["dynatrace", "custom"]);
const queryNameSchema = z.string().regex(/^[a-z1-9\-]+$/);
const dqlQueryPropsSchema = z.object({
  title: z.string().default("Query Result"),
  queryId: z.string().toLowerCase().refine(
    (value) => {
      const [namespace, queryName] = value.split(".");
      return namespaceSchema.safeParse(namespace).success && queryNameSchema.safeParse(queryName).success;
    },
    {
      message: "String must be in the format 'namespace.query-name'. Namespace must be 'dynatrace' or 'custom'. Query name may only contain alphanumerics and dashes."
    }
  )
});
const DqlQuery = (props) => {
  try {
    const { title, queryId } = dqlQueryPropsSchema.parse(props);
    const [queryNamespace, queryName] = queryId.split(".");
    return /* @__PURE__ */ React.createElement(
      InternalDqlQuery,
      {
        title,
        queryNamespace,
        queryName,
        EmptyState: props.emptyState,
        pageSize: props.pageSize
      }
    );
  } catch (e) {
    if (e instanceof ZodError) {
      const title = `${e.issues[0].path.join(".")}: ${e.issues[0].message}`;
      return /* @__PURE__ */ React.createElement(ErrorPanel, { error: e, title });
    }
    return /* @__PURE__ */ React.createElement(ErrorPanel, { error: new Error(`Unknown error: ${e}`) });
  }
};

export { DqlQuery };
//# sourceMappingURL=DqlQuery.esm.js.map
