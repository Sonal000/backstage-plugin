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
import { useCatalogDqlQueries } from './useCatalogDqlQueries';
import { identityApiRef } from '@backstage/core-plugin-api';
import { TestApiProvider } from '@backstage/test-utils';
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
const MockDqlQueryApi = {
    getDataFromQueries: jest.fn().mockResolvedValue([]),
};
const MockIdentityApi = {
    getCredentials: jest.fn().mockResolvedValue({ token: 'mock-token' }),
};
const wrapper = ({ children }) => (React.createElement(TestApiProvider, { apis: [
        [dqlQueryApiRef, MockDqlQueryApi],
        [identityApiRef, MockIdentityApi],
    ] }, children));
const mockedEntityRef = 'component:default/example';
describe('useDqlQuery', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should delegate to dqlQueryApi and return the result of the query', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useCatalogDqlQueries('queryNamespace', mockedEntityRef), { wrapper });
        await waitForNextUpdate();
        expect(MockDqlQueryApi.getDataFromQueries).toHaveBeenCalledWith('queryNamespace', mockedEntityRef, expect.anything());
        expect(result.current.value).toEqual([]);
    });
    it('should return loading true while the query is running', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useCatalogDqlQueries('queryNamespace', mockedEntityRef), { wrapper });
        expect(result.current.loading).toBeTruthy();
        await waitForNextUpdate();
    });
    it('should return error if the query fails', async () => {
        const error = new Error('test');
        MockDqlQueryApi.getDataFromQueries.mockRejectedValue(error);
        const { result, waitForNextUpdate } = renderHook(() => useCatalogDqlQueries('queryNamespace', mockedEntityRef), { wrapper });
        await waitForNextUpdate();
        expect(result.current.error).toEqual(error);
    });
    it('should return error if identity api fails to retrieve credentials', async () => {
        const error = new Error('Failed to get identity token');
        MockIdentityApi.getCredentials.mockResolvedValue({});
        const { result, waitForNextUpdate } = renderHook(() => useCatalogDqlQueries('queryNamespace', mockedEntityRef), { wrapper });
        await waitForNextUpdate();
        expect(result.current.error).toEqual(error);
    });
});
