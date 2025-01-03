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
import { apis } from './apis';
import { Root } from './components/Root';
import { entityPage } from './components/catalog/EntityPage';
import { searchPage } from './components/search/SearchPage';
import { TechRadarPage } from '@backstage-community/plugin-tech-radar';
import { createApp } from '@backstage/app-defaults';
import { AppRouter, FlatRoutes } from '@backstage/core-app-api';
import { AlertDisplay, OAuthRequestDialog, SignInPage, } from '@backstage/core-components';
import { ApiExplorerPage, apiDocsPlugin } from '@backstage/plugin-api-docs';
import { CatalogEntityPage, CatalogIndexPage, catalogPlugin, } from '@backstage/plugin-catalog';
import { catalogEntityCreatePermission } from '@backstage/plugin-catalog-common/alpha';
import { CatalogGraphPage } from '@backstage/plugin-catalog-graph';
import { CatalogImportPage, catalogImportPlugin, } from '@backstage/plugin-catalog-import';
import { orgPlugin } from '@backstage/plugin-org';
import { RequirePermission } from '@backstage/plugin-permission-react';
import { ScaffolderPage, scaffolderPlugin } from '@backstage/plugin-scaffolder';
import { SearchPage } from '@backstage/plugin-search';
import { TechDocsIndexPage, TechDocsReaderPage, techdocsPlugin, } from '@backstage/plugin-techdocs';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { UserSettingsPage } from '@backstage/plugin-user-settings';
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
const app = createApp({
    apis,
    bindRoutes({ bind }) {
        bind(catalogPlugin.externalRoutes, {
            createComponent: scaffolderPlugin.routes.root,
            viewTechDoc: techdocsPlugin.routes.docRoot,
            createFromTemplate: scaffolderPlugin.routes.selectedTemplate,
        });
        bind(apiDocsPlugin.externalRoutes, {
            registerApi: catalogImportPlugin.routes.importPage,
        });
        bind(scaffolderPlugin.externalRoutes, {
            registerComponent: catalogImportPlugin.routes.importPage,
            viewTechDoc: techdocsPlugin.routes.docRoot,
        });
        bind(orgPlugin.externalRoutes, {
            catalogIndex: catalogPlugin.routes.catalogIndex,
        });
    },
    components: {
        SignInPage: props => React.createElement(SignInPage, { ...props, auto: true, providers: ['guest'] }),
    },
});
const routes = (React.createElement(FlatRoutes, null,
    React.createElement(Route, { path: "/", element: React.createElement(Navigate, { to: "catalog" }) }),
    React.createElement(Route, { path: "/catalog", element: React.createElement(CatalogIndexPage, null) }),
    React.createElement(Route, { path: "/catalog/:namespace/:kind/:name", element: React.createElement(CatalogEntityPage, null) }, entityPage),
    React.createElement(Route, { path: "/docs", element: React.createElement(TechDocsIndexPage, null) }),
    React.createElement(Route, { path: "/docs/:namespace/:kind/:name/*", element: React.createElement(TechDocsReaderPage, null) },
        React.createElement(TechDocsAddons, null,
            React.createElement(ReportIssue, null))),
    React.createElement(Route, { path: "/create", element: React.createElement(ScaffolderPage, null) }),
    React.createElement(Route, { path: "/api-docs", element: React.createElement(ApiExplorerPage, null) }),
    React.createElement(Route, { path: "/tech-radar", element: React.createElement(TechRadarPage, { width: 1500, height: 800 }) }),
    React.createElement(Route, { path: "/catalog-import", element: React.createElement(RequirePermission, { permission: catalogEntityCreatePermission },
            React.createElement(CatalogImportPage, null)) }),
    React.createElement(Route, { path: "/search", element: React.createElement(SearchPage, null) }, searchPage),
    React.createElement(Route, { path: "/settings", element: React.createElement(UserSettingsPage, null) }),
    React.createElement(Route, { path: "/catalog-graph", element: React.createElement(CatalogGraphPage, null) })));
export default app.createRoot(React.createElement(React.Fragment, null,
    React.createElement(AlertDisplay, null),
    React.createElement(OAuthRequestDialog, null),
    React.createElement(AppRouter, null,
        React.createElement(Root, null, routes))));
