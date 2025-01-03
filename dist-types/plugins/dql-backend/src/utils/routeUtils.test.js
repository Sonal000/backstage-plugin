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
import { getEntityFromRequest, validateQueries } from './routeUtils';
const mockedEntityRef = 'component:default/example';
describe('routeUtils', () => {
    const getRequest = (ref) => {
        return { query: { entityRef: ref } };
    };
    const getEntityByRefMock = jest.fn();
    const mockedClient = {
        getEntityByRef: getEntityByRefMock,
    };
    const getPluginRequestTokenMock = jest.fn().mockResolvedValue({ token: 'mock-token' });
    const getOwnServiceCredentialsMock = jest.fn();
    const mockedAuth = {
        getPluginRequestToken: getPluginRequestTokenMock,
        getOwnServiceCredentials: getOwnServiceCredentialsMock,
    };
    beforeEach(() => {
        getEntityByRefMock.mockReset();
        getEntityByRefMock.mockResolvedValue({
            kind: 'component',
            apiVersion: '1.0.0',
            metadata: {
                name: 'myComp',
            },
        });
    });
    describe('getEntityFromRequest', () => {
        it('should fail the request if the entityRef is invalid', async () => {
            // act, assert
            await expect(() => getEntityFromRequest(getRequest(''), mockedClient, mockedAuth)).rejects.toThrow('Invalid entity ref');
        });
        it('should fail the request returns undefined', async () => {
            // arrange
            getEntityByRefMock.mockResolvedValue(undefined);
            // act, assert
            await expect(() => getEntityFromRequest(getRequest(mockedEntityRef), mockedClient, mockedAuth)).rejects.toThrow('Entity ref "component:default/example" not found');
        });
        it('should return the entity', async () => {
            // act
            const entity = await getEntityFromRequest(getRequest(mockedEntityRef), mockedClient, mockedAuth);
            // assert
            expect(entity).toEqual({
                kind: 'component',
                apiVersion: '1.0.0',
                metadata: {
                    name: 'myComp',
                },
            });
        });
    });
    describe('validateQueries', () => {
        it.each([
            {
                kind: 'component',
                apiVersion: '1.0.0',
                metadata: {
                    name: '',
                },
            },
            {
                kind: 'component',
                apiVersion: '1.0.0',
                metadata: {
                    name: '',
                    // @ts-ignore
                    dynatrace: {},
                },
            },
            {
                kind: 'component',
                apiVersion: '1.0.0',
                metadata: {
                    name: '',
                    dynatrace: {
                        queries: [],
                    },
                },
            },
            {
                kind: 'component',
                apiVersion: '1.0.0',
                metadata: {
                    name: '',
                    dynatrace: {
                        queries: [
                            // @ts-ignore
                            {
                                id: '',
                            },
                        ],
                    },
                },
            },
        ])('should throw if the queries are incorrect', 
        // @ts-ignore - For some reason jest writes the type incorrectly
        (entity) => {
            expect(() => validateQueries(entity)).toThrow();
        });
        it('should not throw if the queries are valid', () => {
            // act
            const result = validateQueries({
                kind: 'component',
                apiVersion: '1.0.0',
                metadata: {
                    name: '',
                    dynatrace: {
                        queries: [
                            {
                                id: 'id',
                                query: 'query',
                            },
                        ],
                    },
                },
            });
            // assert
            expect(result).toEqual([
                {
                    id: 'id',
                    query: 'query',
                },
            ]);
        });
    });
});
