import { DynatraceMarkdownText } from '../DynatraceMarkdownText.esm.js';
import React from 'react';

const KubernetesDeploymentsEmptyState = ({
  componentName
}) => {
  const message = `# No Kubernetes resources
  No resources on any monitored Kubernetes cluster for ${componentName} found.`;
  return /* @__PURE__ */ React.createElement(DynatraceMarkdownText, { content: message });
};

export { KubernetesDeploymentsEmptyState };
//# sourceMappingURL=KubernetesDeploymentsEmptyState.esm.js.map
