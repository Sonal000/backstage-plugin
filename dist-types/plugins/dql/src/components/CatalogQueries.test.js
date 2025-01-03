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
import { CatalogInfoQuery } from './CatalogQueries';
import { EmptyState } from '@backstage/core-components';
import { EntityProvider } from '@backstage/plugin-catalog-react';
import { renderInTestApp } from '@backstage/test-utils';
import { screen } from '@testing-library/react';
import React from 'react';
jest.mock('./InternalCatalogQueries', () => ({
    InternalCatalogQueries: jest.fn(() => React.createElement("div", { "data-testid": "id" })),
}));
jest.mock('@backstage/core-components', () => ({
    EmptyState: jest.fn(() => null),
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
            dynatrace: {
                queries: [
                    {
                        id: 'dynatrace dql test query 1',
                        query: 'fetch data',
                    },
                    {
                        id: 'dynatrace dql test query 2',
                        query: 'fetch data',
                    },
                ],
            },
        },
        spec: {
            lifecycle: 'production',
            type: 'service',
            owner: 'user:guest',
        },
    };
};
const mockEntityWithoutQueries = (name = 'example', annotations, namespace) => {
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
const prepareComponent = async ({ entity = mockEntity(), } = {}) => {
    return await renderInTestApp(React.createElement(EntityProvider, { entity: entity },
        React.createElement(CatalogInfoQuery, null)));
};
describe('CatalogInfoQuery', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('Should call the InternalCatalogQueries once, for both queries of the entity', async () => {
        const entity = mockEntity();
        await prepareComponent({ entity: entity });
        expect(screen.queryAllByTestId('id').length).toBe(1);
        expect(EmptyState).not.toHaveBeenCalled();
    });
    it('Should show the EmptyState for the entity, when no queries are defined.', async () => {
        const entity = mockEntityWithoutQueries();
        await prepareComponent({ entity: entity });
        expect(screen.queryAllByTestId('id').length).toBe(0);
        expect(EmptyState).toHaveBeenCalled();
    });
});
