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
import { CustomQueryConfig } from '../utils/configParser';
import { DynatraceApi } from './dynatraceApi';
import { Entity } from '@backstage/catalog-model';
import { EntityQuery, TabularData } from '@dynatrace/backstage-plugin-dql-common';
import { CatalogQueryData } from '@dynatrace/backstage-plugin-dql/src/api/types';
import { z } from 'zod';
declare const componentQueryVariablesSchema: z.ZodObject<{
    componentNamespace: z.ZodString;
    componentName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    componentName: string;
    componentNamespace: string;
}, {
    componentName: string;
    componentNamespace: string;
}>;
type ComponentQueryVariables = z.infer<typeof componentQueryVariablesSchema>;
export declare class QueryExecutor {
    private readonly apis;
    private readonly queries;
    constructor(apis: DynatraceApi[], queries: Record<string, CustomQueryConfig | undefined>);
    filterApis: (apis: DynatraceApi[], filterApis: string[]) => DynatraceApi[];
    executeCustomQuery(queryId: string, variables: ComponentQueryVariables): Promise<TabularData>;
    executeCustomCatalogQueries(catalogQueries: EntityQuery[], variables: ComponentQueryVariables): Promise<CatalogQueryData[] | undefined>;
    executeDynatraceQuery(queryId: string, entity: Entity): Promise<TabularData>;
}
export {};
//# sourceMappingURL=queryExecutor.d.ts.map