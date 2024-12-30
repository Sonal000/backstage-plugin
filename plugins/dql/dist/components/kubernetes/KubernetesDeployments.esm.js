import { DqlQuery } from '../DqlQuery.esm.js';
import { KubernetesDeploymentsEmptyState } from './KubernetesDeploymentsEmptyState.esm.js';
import { useEntity, MissingAnnotationEmptyState } from '@backstage/plugin-catalog-react';
import React from 'react';

const KUBERNETES_ANNOTATION = "backstage.io/kubernetes-id";
const KUBERNETES_LABEL_SELECTOR_QUERY_ANNOTATION = "backstage.io/kubernetes-label-selector";
const KubernetesDeployments = ({
  title = "Kubernetes Deployments",
  pageSize
}) => {
  const { entity } = useEntity();
  const kubernetesAnnotationValue = entity.metadata.annotations?.[KUBERNETES_ANNOTATION];
  const kubernetesLabelSelectorQueryAnnotationValue = entity.metadata.annotations?.[KUBERNETES_LABEL_SELECTOR_QUERY_ANNOTATION];
  if (!kubernetesAnnotationValue && !kubernetesLabelSelectorQueryAnnotationValue) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(MissingAnnotationEmptyState, { annotation: KUBERNETES_ANNOTATION }), /* @__PURE__ */ React.createElement("h1", null, "Or use a label selector query, which takes precedence over the previous annotation"));
  }
  return /* @__PURE__ */ React.createElement(
    DqlQuery,
    {
      title,
      queryId: "dynatrace.kubernetes-deployments",
      emptyState: KubernetesDeploymentsEmptyState,
      pageSize
    }
  );
};

export { KubernetesDeployments };
//# sourceMappingURL=KubernetesDeployments.esm.js.map
