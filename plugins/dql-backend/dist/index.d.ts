import * as _backstage_backend_plugin_api from '@backstage/backend-plugin-api';
import { LoggerService, DiscoveryService, AuthService } from '@backstage/backend-plugin-api';
import { Config } from '@backstage/config';
import express from 'express';

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

interface RouterOptions {
    logger: LoggerService;
    config: Config;
    discovery: DiscoveryService;
    auth: AuthService;
}
declare const createRouter: (options: RouterOptions) => Promise<express.Router>;

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
/**
 * dqlPlugin backend plugin
 *
 * @public
 */
declare const dqlPlugin: _backstage_backend_plugin_api.BackendFeature;

export { type RouterOptions, createRouter, dqlPlugin as default };
