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
import { EntityGithubActionsContent, isGithubActionsAvailable, } from '@backstage-community/plugin-github-actions';
import { RELATION_API_CONSUMED_BY, RELATION_API_PROVIDED_BY, RELATION_CONSUMES_API, RELATION_DEPENDENCY_OF, RELATION_DEPENDS_ON, RELATION_HAS_PART, RELATION_PART_OF, RELATION_PROVIDES_API, } from '@backstage/catalog-model';
import { EmptyState, TabbedLayout } from '@backstage/core-components';
import { EntityApiDefinitionCard, EntityConsumedApisCard, EntityConsumingComponentsCard, EntityHasApisCard, EntityProvidedApisCard, EntityProvidingComponentsCard, } from '@backstage/plugin-api-docs';
import { EntityAboutCard, EntityDependsOnComponentsCard, EntityDependsOnResourcesCard, EntityHasComponentsCard, EntityHasResourcesCard, EntityHasSubcomponentsCard, EntityHasSystemsCard, EntityLayout, EntityLinksCard, EntityOrphanWarning, EntityProcessingErrorsPanel, EntityRelationWarning, EntitySwitch, hasCatalogProcessingErrors, hasRelationWarnings, isComponentType, isKind, isOrphan, } from '@backstage/plugin-catalog';
import { Direction, EntityCatalogGraphCard, } from '@backstage/plugin-catalog-graph';
import { EntityGroupProfileCard, EntityMembersListCard, EntityOwnershipCard, EntityUserProfileCard, } from '@backstage/plugin-org';
import { EntityTechdocsContent } from '@backstage/plugin-techdocs';
import { ReportIssue } from '@backstage/plugin-techdocs-module-addons-contrib';
import { TechDocsAddons } from '@backstage/plugin-techdocs-react';
import { EntityCatalogInfoQueryCard, EntityDqlQueryCard, EntityKubernetesDeploymentsCard, } from '@dynatrace/backstage-plugin-dql';
import { Button, Grid } from '@material-ui/core';
import React from 'react';
const techdocsContent = (React.createElement(EntityTechdocsContent, null,
    React.createElement(TechDocsAddons, null,
        React.createElement(ReportIssue, null))));
const cicdContent = (
// This is an example of how you can implement your company's logic in entity page.
// You can for example enforce that all components of type 'service' should use GitHubActions
React.createElement(EntitySwitch, null,
    React.createElement(EntitySwitch.Case, { if: isGithubActionsAvailable },
        React.createElement(EntityGithubActionsContent, null)),
    React.createElement(EntitySwitch.Case, null,
        React.createElement(EmptyState, { title: "No CI/CD available for this entity", missing: "info", description: "You need to add an annotation to your component if you want to enable CI/CD for it. You can read more about annotations in Backstage by clicking the button below.", action: React.createElement(Button, { variant: "contained", color: "primary", href: "https://backstage.io/docs/features/software-catalog/well-known-annotations" }, "Read more") }))));
const entityWarningContent = (React.createElement(React.Fragment, null,
    React.createElement(EntitySwitch, null,
        React.createElement(EntitySwitch.Case, { if: isOrphan },
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement(EntityOrphanWarning, null)))),
    React.createElement(EntitySwitch, null,
        React.createElement(EntitySwitch.Case, { if: hasRelationWarnings },
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement(EntityRelationWarning, null)))),
    React.createElement(EntitySwitch, null,
        React.createElement(EntitySwitch.Case, { if: hasCatalogProcessingErrors },
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement(EntityProcessingErrorsPanel, null))))));
const overviewContent = (React.createElement(Grid, { container: true, spacing: 3, alignItems: "stretch" },
    entityWarningContent,
    React.createElement(Grid, { item: true, md: 6 },
        React.createElement(EntityAboutCard, { variant: "gridItem" })),
    React.createElement(Grid, { item: true, md: 6, xs: 12 },
        React.createElement(EntityCatalogGraphCard, { variant: "gridItem", height: 400 })),
    React.createElement(Grid, { item: true, md: 4, xs: 12 },
        React.createElement(EntityLinksCard, null)),
    React.createElement(Grid, { item: true, md: 8, xs: 12 },
        React.createElement(EntityHasSubcomponentsCard, { variant: "gridItem" }))));
const serviceEntityPage = (React.createElement(EntityLayout, null,
    React.createElement(EntityLayout.Route, { path: "/", title: "Overview" }, overviewContent),
    React.createElement(EntityLayout.Route, { path: "/ci-cd", title: "CI/CD" }, cicdContent),
    React.createElement(EntityLayout.Route, { path: "/api", title: "API" },
        React.createElement(Grid, { container: true, spacing: 3, alignItems: "stretch" },
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityProvidedApisCard, null)),
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityConsumedApisCard, null)))),
    React.createElement(EntityLayout.Route, { path: "/dependencies", title: "Dependencies" },
        React.createElement(Grid, { container: true, spacing: 3, alignItems: "stretch" },
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityDependsOnComponentsCard, { variant: "gridItem" })),
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityDependsOnResourcesCard, { variant: "gridItem" })))),
    React.createElement(EntityLayout.Route, { path: "/docs", title: "Docs" }, techdocsContent),
    React.createElement(EntityLayout.Route, { path: "/dynatrace", title: "Dynatrace" },
        React.createElement(TabbedLayout, null,
            React.createElement(TabbedLayout.Route, { path: "/kubernetes", title: "Kubernetes Deployments" },
                React.createElement(EntityKubernetesDeploymentsCard, null)),
            React.createElement(TabbedLayout.Route, { path: "/davis-events", title: "Davis Events" },
                React.createElement(EntityDqlQueryCard, { title: "Davis Events", queryId: "custom.davis-events" }))))));
const websiteEntityPage = (React.createElement(EntityLayout, null,
    React.createElement(EntityLayout.Route, { path: "/", title: "Overview" }, overviewContent),
    React.createElement(EntityLayout.Route, { path: "/ci-cd", title: "CI/CD" }, cicdContent),
    React.createElement(EntityLayout.Route, { path: "/dependencies", title: "Dependencies" },
        React.createElement(Grid, { container: true, spacing: 3, alignItems: "stretch" },
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityDependsOnComponentsCard, { variant: "gridItem" })),
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityDependsOnResourcesCard, { variant: "gridItem" })))),
    React.createElement(EntityLayout.Route, { path: "/docs", title: "Docs" }, techdocsContent),
    React.createElement(EntityLayout.Route, { path: "/dynatrace", title: "Dynatrace" },
        React.createElement(TabbedLayout, null,
            React.createElement(TabbedLayout.Route, { path: "/kubernetes", title: "Kubernetes Deployments" },
                React.createElement(EntityKubernetesDeploymentsCard, { title: "Kubernetes Deployments with explicit title" })),
            React.createElement(TabbedLayout.Route, { path: "/srg", title: "Site Reliability Guardian" },
                React.createElement(EntityDqlQueryCard, { title: "Site Reliability Guardian Validations", queryId: "dynatrace.srg-validations" })),
            React.createElement(TabbedLayout.Route, { path: "/davis-events", title: "Davis Events" },
                React.createElement(EntityDqlQueryCard, { title: "Davis Events", queryId: "custom.davis-events" })),
            React.createElement(TabbedLayout.Route, { path: "/example-catalog-queries", title: "Example Catalog Queries" },
                React.createElement(EntityCatalogInfoQueryCard, null))))));
/**
 * NOTE: This page is designed to work on small screens such as mobile devices.
 * This is based on Material UI Grid. If breakpoints are used, each grid item must set the `xs` prop to a column size or to `true`,
 * since this does not default. If no breakpoints are used, the items will equitably share the available space.
 * https://material-ui.com/components/grid/#basic-grid.
 */
const defaultEntityPage = (React.createElement(EntityLayout, null,
    React.createElement(EntityLayout.Route, { path: "/", title: "Overview" }, overviewContent),
    React.createElement(EntityLayout.Route, { path: "/docs", title: "Docs" }, techdocsContent)));
const componentPage = (React.createElement(EntitySwitch, null,
    React.createElement(EntitySwitch.Case, { if: isComponentType('service') }, serviceEntityPage),
    React.createElement(EntitySwitch.Case, { if: isComponentType('website') }, websiteEntityPage),
    React.createElement(EntitySwitch.Case, null, defaultEntityPage)));
const apiPage = (React.createElement(EntityLayout, null,
    React.createElement(EntityLayout.Route, { path: "/", title: "Overview" },
        React.createElement(Grid, { container: true, spacing: 3 },
            entityWarningContent,
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityAboutCard, null)),
            React.createElement(Grid, { item: true, md: 6, xs: 12 },
                React.createElement(EntityCatalogGraphCard, { variant: "gridItem", height: 400 })),
            React.createElement(Grid, { item: true, md: 4, xs: 12 },
                React.createElement(EntityLinksCard, null)),
            React.createElement(Grid, { container: true, item: true, md: 12 },
                React.createElement(Grid, { item: true, md: 6 },
                    React.createElement(EntityProvidingComponentsCard, null)),
                React.createElement(Grid, { item: true, md: 6 },
                    React.createElement(EntityConsumingComponentsCard, null))))),
    React.createElement(EntityLayout.Route, { path: "/definition", title: "Definition" },
        React.createElement(Grid, { container: true, spacing: 3 },
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement(EntityApiDefinitionCard, null))))));
const userPage = (React.createElement(EntityLayout, null,
    React.createElement(EntityLayout.Route, { path: "/", title: "Overview" },
        React.createElement(Grid, { container: true, spacing: 3 },
            entityWarningContent,
            React.createElement(Grid, { item: true, xs: 12, md: 6 },
                React.createElement(EntityUserProfileCard, { variant: "gridItem" })),
            React.createElement(Grid, { item: true, xs: 12, md: 6 },
                React.createElement(EntityOwnershipCard, { variant: "gridItem" }))))));
const groupPage = (React.createElement(EntityLayout, null,
    React.createElement(EntityLayout.Route, { path: "/", title: "Overview" },
        React.createElement(Grid, { container: true, spacing: 3 },
            entityWarningContent,
            React.createElement(Grid, { item: true, xs: 12, md: 6 },
                React.createElement(EntityGroupProfileCard, { variant: "gridItem" })),
            React.createElement(Grid, { item: true, xs: 12, md: 6 },
                React.createElement(EntityOwnershipCard, { variant: "gridItem" })),
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement(EntityMembersListCard, null))))));
const systemPage = (React.createElement(EntityLayout, null,
    React.createElement(EntityLayout.Route, { path: "/", title: "Overview" },
        React.createElement(Grid, { container: true, spacing: 3, alignItems: "stretch" },
            entityWarningContent,
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityAboutCard, { variant: "gridItem" })),
            React.createElement(Grid, { item: true, md: 6, xs: 12 },
                React.createElement(EntityCatalogGraphCard, { variant: "gridItem", height: 400 })),
            React.createElement(Grid, { item: true, md: 4, xs: 12 },
                React.createElement(EntityLinksCard, null)),
            React.createElement(Grid, { item: true, md: 8 },
                React.createElement(EntityHasComponentsCard, { variant: "gridItem" })),
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityHasApisCard, { variant: "gridItem" })),
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityHasResourcesCard, { variant: "gridItem" })))),
    React.createElement(EntityLayout.Route, { path: "/diagram", title: "Diagram" },
        React.createElement(EntityCatalogGraphCard, { variant: "gridItem", direction: Direction.TOP_BOTTOM, title: "System Diagram", height: 700, relations: [
                RELATION_PART_OF,
                RELATION_HAS_PART,
                RELATION_API_CONSUMED_BY,
                RELATION_API_PROVIDED_BY,
                RELATION_CONSUMES_API,
                RELATION_PROVIDES_API,
                RELATION_DEPENDENCY_OF,
                RELATION_DEPENDS_ON,
            ], unidirectional: false }))));
const domainPage = (React.createElement(EntityLayout, null,
    React.createElement(EntityLayout.Route, { path: "/", title: "Overview" },
        React.createElement(Grid, { container: true, spacing: 3, alignItems: "stretch" },
            entityWarningContent,
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityAboutCard, { variant: "gridItem" })),
            React.createElement(Grid, { item: true, md: 6, xs: 12 },
                React.createElement(EntityCatalogGraphCard, { variant: "gridItem", height: 400 })),
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(EntityHasSystemsCard, { variant: "gridItem" }))))));
export const entityPage = (React.createElement(EntitySwitch, null,
    React.createElement(EntitySwitch.Case, { if: isKind('component'), children: componentPage }),
    React.createElement(EntitySwitch.Case, { if: isKind('api'), children: apiPage }),
    React.createElement(EntitySwitch.Case, { if: isKind('group'), children: groupPage }),
    React.createElement(EntitySwitch.Case, { if: isKind('user'), children: userPage }),
    React.createElement(EntitySwitch.Case, { if: isKind('system'), children: systemPage }),
    React.createElement(EntitySwitch.Case, { if: isKind('domain'), children: domainPage }),
    React.createElement(EntitySwitch.Case, null, defaultEntityPage)));
