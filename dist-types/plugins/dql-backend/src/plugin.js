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
import { coreServices, createBackendPlugin, } from '@backstage/backend-plugin-api';
import { createRouter } from './service/router';
/**
 * dqlPlugin backend plugin
 *
 * @public
 */
export const dqlPlugin = createBackendPlugin({
    pluginId: 'dynatrace-dql',
    register(env) {
        env.registerInit({
            deps: {
                logger: coreServices.logger,
                config: coreServices.rootConfig,
                discovery: coreServices.discovery,
                http: coreServices.httpRouter,
                auth: coreServices.auth,
            },
            async init({ http, config, logger, discovery, auth }) {
                http.use(await createRouter({
                    config,
                    logger,
                    discovery,
                    auth,
                }));
            },
        });
    },
});
