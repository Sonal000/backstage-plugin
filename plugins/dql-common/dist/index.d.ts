import { z } from 'zod';
import { EntityMeta, Entity } from '@backstage/catalog-model';

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

declare enum TableTypes {
    LINK = "link",
    OBJECT = "object"
}
declare const tableCell: z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodNull, z.ZodBoolean]>, z.ZodNumber]>, string, number | boolean | null>]>, z.ZodObject<{
    type: z.ZodLiteral<TableTypes.LINK>;
    text: z.ZodString;
    url: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: TableTypes.LINK;
    url: string;
    text: string;
}, {
    type: TableTypes.LINK;
    url: string;
    text: string;
}>]>, z.ZodEffects<z.ZodUnion<[z.ZodArray<z.ZodAny, "many">, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>]>, {
    type: TableTypes.OBJECT;
    content: string;
}, any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough">>]>;
declare const rowData: z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodNull, z.ZodBoolean]>, z.ZodNumber]>, string, number | boolean | null>]>, z.ZodObject<{
    type: z.ZodLiteral<TableTypes.LINK>;
    text: z.ZodString;
    url: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: TableTypes.LINK;
    url: string;
    text: string;
}, {
    type: TableTypes.LINK;
    url: string;
    text: string;
}>]>, z.ZodEffects<z.ZodUnion<[z.ZodArray<z.ZodAny, "many">, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>]>, {
    type: TableTypes.OBJECT;
    content: string;
}, any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough">>]>>;
declare const tabularDataSchema: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodUnion<[z.ZodUnion<[z.ZodNull, z.ZodBoolean]>, z.ZodNumber]>, string, number | boolean | null>]>, z.ZodObject<{
    type: z.ZodLiteral<TableTypes.LINK>;
    text: z.ZodString;
    url: z.ZodString;
}, "strict", z.ZodTypeAny, {
    type: TableTypes.LINK;
    url: string;
    text: string;
}, {
    type: TableTypes.LINK;
    url: string;
    text: string;
}>]>, z.ZodEffects<z.ZodUnion<[z.ZodArray<z.ZodAny, "many">, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>]>, {
    type: TableTypes.OBJECT;
    content: string;
}, any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough">>]>>, "many">;
declare const TabularDataFactory: {
    fromString: (input: string) => TabularData;
    fromObject: (input: unknown) => Record<string, string | {
        type: TableTypes.LINK;
        url: string;
        text: string;
    } | {
        type: TableTypes.OBJECT;
        content: string;
    }>[];
};
type TabularData = z.infer<typeof tabularDataSchema>;
type TabularDataRow = z.infer<typeof rowData>;
type TabularDataCell = z.infer<typeof tableCell>;

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
declare const dynatraceCatalogQuerySchema: z.ZodArray<z.ZodObject<{
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
type EntityQuery = z.infer<typeof entityQuerySchema>;
type ExtendedEntityMetadata = EntityMeta & {
    dynatrace?: {
        queries: EntityQuery[];
    };
};
type ExtendedEntity = Entity & {
    metadata: ExtendedEntityMetadata;
};

export { type EntityQuery, type ExtendedEntity, type ExtendedEntityMetadata, TableTypes, type TabularData, type TabularDataCell, TabularDataFactory, type TabularDataRow, dynatraceCatalogQuerySchema };
