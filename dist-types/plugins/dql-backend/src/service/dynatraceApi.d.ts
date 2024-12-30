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
import { LoggerService } from '@backstage/backend-plugin-api';
import { TabularData } from '@dynatrace/backstage-plugin-dql-common';
export type DynatraceEnvironmentConfig = {
    name: string;
    url: string;
    tokenUrl: string;
    clientId: string;
    clientSecret: string;
    accountUrn: string;
};
export type TokenResponse = {
    scope: string;
    token_type: string;
    expires_in: number;
    access_token: string;
    resource: string;
};
export type ExecuteQueryResponse = {
    state: string;
    requestToken: string;
    ttlSeconds: number;
};
export type PollQueryResponse<RecordType> = {
    state: string;
    progress: number;
    result: {
        records: RecordType[];
        types: {
            indexRange: number[];
            mappings: Record<string, {
                type: string;
            }>;
        }[];
        metadata: Record<string, object>;
    };
};
export declare class DynatraceApi {
    private identifier;
    private logger;
    private readonly config;
    constructor(config: DynatraceEnvironmentConfig, identifier: string, logger: LoggerService);
    get environmentName(): string;
    get environmentUrl(): string;
    executeDqlQuery(query: string): Promise<TabularData>;
}
//# sourceMappingURL=dynatraceApi.d.ts.map