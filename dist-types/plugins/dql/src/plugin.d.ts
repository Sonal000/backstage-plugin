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
export declare const dqlQueryPlugin: import("@backstage/core-plugin-api").BackstagePlugin<{
    root: import("@backstage/core-plugin-api").RouteRef<undefined>;
}, {}, {}>;
export declare const EntityDqlQueryCard: (props: import("./components").DqlQueryProps) => import("react").JSX.Element;
export declare const EntityCatalogInfoQueryCard: (props: import("./components").CatalogInfoQueryProps) => import("react").JSX.Element;
export declare const EntityKubernetesDeploymentsCard: ({ title, pageSize, }: {
    title?: string;
    pageSize?: number;
}) => import("react").JSX.Element;
//# sourceMappingURL=plugin.d.ts.map