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
import { Theme, WithStyles } from '@material-ui/core';
import React from 'react';
export type ObjectModalProps = {
    data: string;
    property: string;
};
declare const styles: (theme: Theme) => import("@material-ui/styles").StyleRules<{}, "flex" | "root" | "closeButton">;
export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}
export declare const ObjectModal: ({ data, property }: ObjectModalProps) => React.JSX.Element;
export {};
//# sourceMappingURL=ObjectModal.d.ts.map