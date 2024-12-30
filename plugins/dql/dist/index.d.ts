import * as React from 'react';
import React__default from 'react';
import { z } from 'zod';
import * as _backstage_core_plugin_api from '@backstage/core-plugin-api';

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
type EmptyStateProps = {
    componentName: string;
    queryName: string;
    queryNamespace: string;
    additionalInformation?: string;
};

declare const dqlQueryPropsSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    queryId: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    title: string;
    queryId: string;
}, {
    queryId: string;
    title?: string | undefined;
}>;
type DqlQueryProps = {
    emptyState?: React__default.ComponentType<EmptyStateProps>;
    pageSize?: number;
} & z.infer<typeof dqlQueryPropsSchema>;

type CatalogInfoQueryProps = {
    emptyState?: React__default.ComponentType<EmptyStateProps>;
    pageSize?: number;
};

declare const dqlQueryPlugin: _backstage_core_plugin_api.BackstagePlugin<{
    root: _backstage_core_plugin_api.RouteRef<undefined>;
}, {}, {}>;
declare const EntityDqlQueryCard: (props: DqlQueryProps) => React.JSX.Element;
declare const EntityCatalogInfoQueryCard: (props: CatalogInfoQueryProps) => React.JSX.Element;
declare const EntityKubernetesDeploymentsCard: ({ title, pageSize, }: {
    title?: string;
    pageSize?: number;
}) => React.JSX.Element;

export { EntityCatalogInfoQueryCard, EntityDqlQueryCard, EntityKubernetesDeploymentsCard, dqlQueryPlugin };
