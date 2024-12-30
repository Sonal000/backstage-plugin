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
import { EntityDqlQueryCard, EntityKubernetesDeploymentsCard, dqlQueryPlugin, } from '../src';
import { dqlQueryApiRef } from '../src/api';
import { exampleData } from './data';
import { TabbedLayout } from '@backstage/core-components';
import { createDevApp } from '@backstage/dev-utils';
import { EntityProvider } from '@backstage/plugin-catalog-react';
import { TestApiProvider } from '@backstage/test-utils';
import { Box } from '@material-ui/core';
import React from 'react';
const mockComponentWithNamespace = {
    apiVersion: 'backstage.io/v1alpha1',
    kind: 'Component',
    metadata: {
        // This component would map to Kubernetes workloads with the label
        // `backstage.io/component: hardening.backstage-example`.
        name: 'backstage-example',
        description: 'backstage.io/example',
        namespace: 'hardening',
    },
    spec: {
        lifecycle: 'production',
        type: 'service',
        owner: 'user:guest',
    },
};
const mockComponentDefaultNamespace = {
    apiVersion: 'backstage.io/v1alpha1',
    kind: 'Component',
    metadata: {
        // This component would map to Kubernetes workloads with the label
        // `backstage.io/component: backstage-example-2.default`.
        name: 'backstage-example-2',
        description: 'backstage.io/example02',
    },
    spec: {
        lifecycle: 'production',
        type: 'service',
        owner: 'user:guest',
    },
};
class MockDqlQueryApi {
    async getData() {
        return exampleData;
    }
    async getDataFromQueries() {
        return [
            { title: '', data: exampleData },
            { title: '', data: exampleData },
        ];
    }
}
class MockDqlQueryApiNoResult {
    async getData() {
        return [];
    }
    async getDataFromQueries() {
        return [];
    }
}
class MockDqlQueryApiError {
    async getData() {
        throw new Error('404 Not Found');
    }
    async getDataFromQueries() {
        throw new Error('404 Not Found');
    }
}
const DqlCard = ({ mockData, title, queryId }) => {
    return (React.createElement(Box, { m: 4 },
        React.createElement(EntityProvider, { entity: mockData },
            React.createElement(EntityDqlQueryCard, { title: title, queryId: queryId }))));
};
const KubernetesCard = ({ mockData, title }) => {
    return (React.createElement(Box, { m: 4 },
        React.createElement(EntityProvider, { entity: mockData },
            React.createElement(EntityKubernetesDeploymentsCard, { title: title }))));
};
createDevApp()
    .registerPlugin(dqlQueryPlugin)
    .addPage({
    element: (React.createElement(TabbedLayout, null,
        React.createElement(TabbedLayout.Route, { path: "/examples", title: "Examples" },
            React.createElement(React.Fragment, null,
                React.createElement(TestApiProvider, { apis: [[dqlQueryApiRef, new MockDqlQueryApi()]] },
                    React.createElement(DqlCard, { title: "Some Deployments", queryId: "dynatrace.kubernetes-deployments", mockData: mockComponentWithNamespace }),
                    React.createElement(DqlCard, { title: "Other Deployments", queryId: "dynatrace.kubernetes-deployments", mockData: mockComponentDefaultNamespace })))),
        React.createElement(TabbedLayout.Route, { path: "/errors", title: "Error Cases" },
            React.createElement(React.Fragment, null,
                React.createElement(DqlCard, { title: "Misconfigured Query", queryId: "bad.query", mockData: mockComponentWithNamespace }),
                React.createElement(TestApiProvider, { apis: [[dqlQueryApiRef, new MockDqlQueryApiError()]] },
                    React.createElement(DqlCard, { title: "404 from API", queryId: "dynatrace.non-existent-query", mockData: mockComponentWithNamespace })))),
        React.createElement(TabbedLayout.Route, { path: "/empty", title: "Empty States" },
            React.createElement(React.Fragment, null,
                React.createElement(TestApiProvider, { apis: [[dqlQueryApiRef, new MockDqlQueryApiNoResult()]] },
                    React.createElement(DqlCard, { title: "Empty State", queryId: "dynatrace.kubernetes-deployments", mockData: mockComponentWithNamespace })))),
        React.createElement(TabbedLayout.Route, { path: "/kubernetes", title: "Kubernetes Card" },
            React.createElement(React.Fragment, null,
                React.createElement(TestApiProvider, { apis: [[dqlQueryApiRef, new MockDqlQueryApi()]] },
                    React.createElement(KubernetesCard, { mockData: mockComponentWithNamespace })),
                React.createElement(TestApiProvider, { apis: [[dqlQueryApiRef, new MockDqlQueryApi()]] },
                    React.createElement(KubernetesCard, { title: "Another list of deployments", mockData: mockComponentWithNamespace })))),
        React.createElement(TabbedLayout.Route, { path: "/kubernetes-empty", title: "Kubernetes Card Empty" },
            React.createElement(TestApiProvider, { apis: [[dqlQueryApiRef, new MockDqlQueryApiNoResult()]] },
                React.createElement(KubernetesCard, { mockData: mockComponentWithNamespace }))))),
    title: 'Root Page',
    path: '/catalog/hardening/component/backstage-example',
})
    .render();
