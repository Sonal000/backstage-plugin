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
import { z } from 'zod';
export declare enum TableTypes {
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
export declare const TabularDataFactory: {
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
export type TabularData = z.infer<typeof tabularDataSchema>;
export type TabularDataRow = z.infer<typeof rowData>;
export type TabularDataCell = z.infer<typeof tableCell>;
export {};
//# sourceMappingURL=tabularData.d.ts.map