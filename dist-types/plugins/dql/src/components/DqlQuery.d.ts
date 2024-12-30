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
import { EmptyStateProps } from './types';
import React from 'react';
import { z } from 'zod';
declare const dqlQueryPropsSchema: z.ZodObject<{
    title: z.ZodDefault<z.ZodString>;
    queryId: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    title: string;
    queryId: string;
}, {
    queryId: string;
    title?: string | undefined;
}>;
export type DqlQueryProps = {
    emptyState?: React.ComponentType<EmptyStateProps>;
    pageSize?: number;
} & z.infer<typeof dqlQueryPropsSchema>;
/**
 * DqlQuery is a wrapper around InternalDqlQuery that provides error handling
 * for invalid props.
 * @param props DqlQueryProps
 * @returns React.ReactElement either a InternalDqlQuery or an ErrorPanel
 */
export declare const DqlQuery: (props: DqlQueryProps) => React.JSX.Element;
export {};
//# sourceMappingURL=DqlQuery.d.ts.map