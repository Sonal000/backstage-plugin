'use strict';

/**
 * @license
 * Copyright 2024 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function parseKubernetesSelector(labelSelector) {
  const statements = labelSelector.split(",");
  return statements.map((statement) => {
    const keyValue = statement.split("=");
    if (keyValue.length < 2) {
      return void 0;
    }
    const key = keyValue[0].trim();
    const value = keyValue[1].trim();
    if (!key || !value) {
      return void 0;
    }
    return {
      key,
      value
    };
  }).filter((label) => !!label);
}
function generateKubernetesSelectorFilter(labelSelector) {
  const labels = parseKubernetesSelector(labelSelector);
  if (labels.length === 0) {
    return "";
  }
  const labelMap = labels.map((label) => `workload.labels[\`${label.key}\`] == "${label.value}"`).join(" AND ");
  return labelMap ? `| filter ${labelMap}` : "";
}

exports.generateKubernetesSelectorFilter = generateKubernetesSelectorFilter;
//# sourceMappingURL=labelSelectorParser.cjs.js.map
