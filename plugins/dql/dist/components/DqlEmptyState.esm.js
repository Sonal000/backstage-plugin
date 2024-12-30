import { DynatraceMarkdownText } from './DynatraceMarkdownText.esm.js';
import React from 'react';

const DqlEmptyState = ({
  componentName,
  queryName,
  queryNamespace,
  additionalInformation = ""
}) => {
  const message = `# We turned up empty

  Query
  ${queryNamespace === "catalog" ? queryName ? `with the title \`${queryName}\` defined in catalog-info.yaml` : "defined in catalog-info.yaml" : `\`${queryNamespace}.${queryName}\``} 
   did not return any data for component 
  \`${componentName}\`.

  If you recently added the component, it may take a few minutes for
  Dynatrace to start reporting data. If the component has been running
  for a while, it may not be reporting data. Please check that your
  component is indeed reporting data to Dynatrace and, in case you are
  using custom queries, that the query is correct. 
  
  ${additionalInformation}`;
  return /* @__PURE__ */ React.createElement(DynatraceMarkdownText, { content: message });
};

export { DqlEmptyState };
//# sourceMappingURL=DqlEmptyState.esm.js.map
