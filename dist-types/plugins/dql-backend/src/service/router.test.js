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
import { createRouter } from './router';
import { MockConfigApi } from '@backstage/test-utils';
import express from 'express';
import { createLogger } from 'winston';
describe('createRouter', () => {
    let app;
    beforeAll(async () => {
        const router = await createRouter({
            logger: createLogger(),
            discovery: {
                async getBaseUrl() {
                    return '';
                },
                async getExternalBaseUrl() {
                    return '';
                },
            },
            config: new MockConfigApi({
                dynatrace: {
                    environments: [
                        {
                            name: 'dynatrace-env-name',
                            url: 'https://test.dynatrace.com',
                            tokenUrl: 'token-url',
                            clientId: 'dynatrace-client-id',
                            clientSecret: 'dynatrace-client-secret',
                            accountUrn: 'dynatrace-account-urn',
                        },
                    ],
                },
            }),
        });
        app = express().use(router);
    });
    beforeEach(() => {
        jest.resetAllMocks();
    });
    it('should not fail because of missing tests', () => {
        expect(app).toBeDefined();
    });
});
