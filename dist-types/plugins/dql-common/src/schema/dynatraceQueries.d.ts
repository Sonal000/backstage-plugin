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
import { Entity, EntityMeta } from '@backstage/catalog-model';
import { z } from 'zod';
declare const entityQuerySchema: z.ZodObject<{
    /**
     * The id of the query.
     */
    id: z.ZodString;
    /**
     * The query itself.
     */
    query: z.ZodString;
    /**
     * The description of the query.
     */
    description: z.ZodOptional<z.ZodString>;
    /**
     * The environments in which the query is executed.
     */
    environments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    query: string;
    description?: string | undefined;
    environments?: string[] | undefined;
}, {
    id: string;
    query: string;
    description?: string | undefined;
    environments?: string[] | undefined;
}>;
export declare const dynatraceCatalogQuerySchema: z.ZodArray<z.ZodObject<{
    /**
     * The id of the query.
     */
    id: z.ZodString;
    /**
     * The query itself.
     */
    query: z.ZodString;
    /**
     * The description of the query.
     */
    description: z.ZodOptional<z.ZodString>;
    /**
     * The environments in which the query is executed.
     */
    environments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    query: string;
    description?: string | undefined;
    environments?: string[] | undefined;
}, {
    id: string;
    query: string;
    description?: string | undefined;
    environments?: string[] | undefined;
}>, "many">;
export type EntityQuery = z.infer<typeof entityQuerySchema>;
export type ExtendedEntityMetadata = EntityMeta & {
    dynatrace?: {
        queries: EntityQuery[];
    };
};
export type ExtendedEntity = Entity & {
    metadata: ExtendedEntityMetadata;
};
export {};
//# sourceMappingURL=dynatraceQueries.d.ts.map