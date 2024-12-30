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
import { dqlQueryApiRef } from '../api';
import { DqlEmptyState } from './DqlEmptyState';
import { InternalDqlQuery } from './InternalDqlQuery';
import { TabularDataTable } from './TabularDataTable';
import { ResponseErrorPanel } from '@backstage/core-components';
import { identityApiRef } from '@backstage/core-plugin-api';
import { EntityProvider } from '@backstage/plugin-catalog-react';
import { TestApiProvider, renderInTestApp } from '@backstage/test-utils';
import React from 'react';
jest.mock('./TabularDataTable', () => ({
    TabularDataTable: jest.fn(() => null),
}));
jest.mock('./DqlEmptyState', () => ({
    DqlEmptyState: jest.fn(() => null),
}));
jest.mock('@backstage/core-components', () => ({
    Progress: jest.fn(() => null),
    ResponseErrorPanel: jest.fn(() => null),
}));
const mockEntity = (name = 'example', annotations, namespace) => {
    return {
        apiVersion: 'backstage.io/v1alpha1',
        kind: 'Component',
        metadata: {
            name,
            description: 'backstage.io/example',
            annotations,
            namespace,
        },
        spec: {
            lifecycle: 'production',
            type: 'service',
            owner: 'user:guest',
        },
    };
};
const mockedEntityRef = 'component:default/example';
const mockDqlQueryApi = (data = [], titles = []) => {
    return {
        getData: jest.fn().mockResolvedValue(data),
        getDataFromQueries: jest.fn().mockResolvedValue([
            { title: titles[0], data: data },
            { title: titles[1], data: data },
        ]),
    };
};
const MockIdentityApi = {
    getCredentials: jest.fn().mockResolvedValue({ token: 'mock-token' }),
};
const prepareComponent = async ({ entity = mockEntity(), queryApi = mockDqlQueryApi(), identityApi = MockIdentityApi, title = 'some title', queryNamespace = 'dynatrace', queryName = 'query-id-1', EmptyState, } = {}) => {
    return await renderInTestApp(React.createElement(EntityProvider, { entity: entity },
        React.createElement(TestApiProvider, { apis: [
                [dqlQueryApiRef, queryApi],
                [identityApiRef, identityApi],
            ] },
            React.createElement(InternalDqlQuery, { title: title, queryNamespace: queryNamespace, queryName: queryName, EmptyState: EmptyState }))));
};
describe('DqlQuery', () => {
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => { });
    });
    afterAll(() => {
        // We'll swallow the error messages from the component
        // eslint-disable-next-line no-console
        console.error.mockRestore();
    });
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should render the TabularDataTable component', async () => {
        const title = 'some title';
        const data = [{ Heading: 'value' }];
        await prepareComponent({ title, queryApi: mockDqlQueryApi(data) });
        expect(TabularDataTable).toHaveBeenCalledWith(expect.objectContaining({
            title,
            data,
        }), expect.anything());
    });
    it('should fill in entity ref', async () => {
        const queryApi = mockDqlQueryApi();
        const entity = mockEntity('example', undefined);
        await prepareComponent({ entity, queryApi });
        expect(queryApi.getData).toHaveBeenCalledWith(expect.anything(), expect.anything(), mockedEntityRef, expect.anything());
    });
    it('should render an error panel in case of errors', async () => {
        const error = new Error('some error');
        const queryApi = {
            getData: () => {
                throw error;
            },
            getDataFromQueries: () => {
                throw error;
            },
        };
        const entity = mockEntity('example', undefined);
        await prepareComponent({ entity, queryApi });
        expect(TabularDataTable).not.toHaveBeenCalled();
        expect(ResponseErrorPanel).toHaveBeenCalledWith(expect.objectContaining({
            error,
        }), expect.anything());
    });
    it('should render an default empty state if no data is returned', async () => {
        const componentName = 'example';
        const queryName = 'query-id-1';
        const queryNamespace = 'dynatrace';
        const queryApi = mockDqlQueryApi();
        const entity = mockEntity(componentName);
        await prepareComponent({ entity, queryApi, queryName, queryNamespace });
        expect(TabularDataTable).not.toHaveBeenCalled();
        expect(ResponseErrorPanel).not.toHaveBeenCalled();
        expect(DqlEmptyState).toHaveBeenCalledWith(expect.objectContaining({
            queryNamespace,
            queryName,
            componentName,
        }), expect.anything());
    });
    it('should render a custom empty state if no data is returned', async () => {
        const componentName = 'example';
        const queryName = 'query-id-1';
        const queryNamespace = 'dynatrace';
        const queryApi = mockDqlQueryApi();
        const entity = mockEntity(componentName);
        const EmptyState = jest.fn(() => null);
        await prepareComponent({
            entity,
            queryApi,
            queryName,
            queryNamespace,
            EmptyState,
        });
        expect(TabularDataTable).not.toHaveBeenCalled();
        expect(ResponseErrorPanel).not.toHaveBeenCalled();
        expect(DqlEmptyState).not.toHaveBeenCalled();
        expect(EmptyState).toHaveBeenCalledWith(expect.objectContaining({
            queryNamespace,
            queryName,
            componentName,
        }), expect.anything());
    });
    it('should promote the srg when no data is returned', async () => {
        const componentName = 'example';
        const queryName = 'srg-validations';
        const queryNamespace = 'dynatrace';
        const additionalInformation = `# No Site Reliability Guardian resources
  No result received. If you don't use Site Reliability Guardians, do not hesitate to integrate them. 
  [View this for more information.](https://docs.dynatrace.com/docs/platform-modules/automations/site-reliability-guardian)
`;
        const queryApi = mockDqlQueryApi();
        const entity = mockEntity(componentName);
        const EmptyState = jest.fn(() => null);
        await prepareComponent({
            entity,
            queryApi,
            queryName,
            queryNamespace,
            EmptyState,
        });
        expect(TabularDataTable).not.toHaveBeenCalled();
        expect(ResponseErrorPanel).not.toHaveBeenCalled();
        expect(DqlEmptyState).not.toHaveBeenCalled();
        expect(EmptyState).toHaveBeenCalledWith(expect.objectContaining({
            queryNamespace,
            queryName,
            componentName,
            additionalInformation,
        }), expect.anything());
    });
});