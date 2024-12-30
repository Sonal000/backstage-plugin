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
import { ObjectModal } from './ObjectModal';
import { Table } from '@backstage/core-components';
import { TableTypes, } from '@dynatrace/backstage-plugin-dql-common';
import { Link } from '@material-ui/core';
import React, { useMemo } from 'react';
const cellRenderer = (field) => {
    return (data) => {
        const cellData = data[field];
        if (cellData === undefined) {
            // key does not exist on this row
            return '';
        }
        if (typeof cellData === 'string') {
            return cellData;
        }
        if (cellData.type === TableTypes.OBJECT) {
            return React.createElement(ObjectModal, { data: cellData.content, property: field });
        }
        if (cellData.type === TableTypes.LINK) {
            return (React.createElement(Link, { href: cellData.url, target: "_blank", rel: "noopener" }, cellData.text));
        }
        return JSON.stringify(cellData);
    };
};
export const TabularDataTable = ({ title, data, pageSize = 10, }) => {
    const columns = useMemo(() => {
        const keys = data.reduce((acc, row) => {
            for (const key in row) {
                acc.add(key);
            }
            return acc;
        }, new Set());
        return Array.from(keys).map(key => ({
            title: key,
            field: key,
            render: cellRenderer(key),
        }));
    }, [data]);
    return (React.createElement(Table, { title: title, options: { search: true, paging: true, pageSize: pageSize }, columns: columns, data: data }));
};
