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
import { useCatalogDqlQueries } from '../hooks/useCatalogDqlQueries';
import { DqlEmptyState } from './DqlEmptyState';
import { TabularDataTable } from './TabularDataTable';
import { stringifyEntityRef } from '@backstage/catalog-model';
import { Progress, ResponseErrorPanel } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import React from 'react';
export const InternalCatalogQueries = ({ queryNamespace, EmptyState = DqlEmptyState, pageSize, }) => {
    const { entity } = useEntity();
    const componentName = entity.metadata.name;
    const { error, loading, value } = useCatalogDqlQueries(queryNamespace, stringifyEntityRef(entity));
    if (loading) {
        return React.createElement(Progress, null);
    }
    else if (error) {
        return React.createElement(ResponseErrorPanel, { error: error });
    }
    if (!value || value.length === 0) {
        return (React.createElement(EmptyState, { componentName: componentName, queryName: '', queryNamespace: queryNamespace, additionalInformation: "Please ensure that you have correctly defined queries in the catalog-info.yaml file." }));
    }
    return (React.createElement(React.Fragment, null, value.map((queryData, index) => queryData.data?.length > 0 ? (React.createElement(TabularDataTable, { key: index, data: queryData.data, title: queryData.title, pageSize: pageSize })) : (React.createElement(EmptyState, { key: index, componentName: componentName, queryName: queryData.title, queryNamespace: queryNamespace })))));
};
