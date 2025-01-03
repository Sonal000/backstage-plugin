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
import { DqlEmptyState } from './DqlEmptyState';
import { render } from '@testing-library/react';
import React from 'react';
const prepareComponent = ({ componentName = 'example', queryName = 'query', queryNamespace = 'dynatrace', }) => {
    return render(React.createElement(DqlEmptyState, { componentName: componentName, queryName: queryName, queryNamespace: queryNamespace }));
};
describe('DqlEmptyState', () => {
    it('should include the component and query references in the explanation', () => {
        const componentName = 'example';
        const queryName = 'query-id-1';
        const queryNamespace = 'dynatrace';
        const rendered = prepareComponent({
            componentName,
            queryName,
            queryNamespace,
        });
        expect(rendered.getByText(/example/)).toBeInTheDocument();
        expect(rendered.getByText(/dynatrace.query-id-1/)).toBeInTheDocument();
    });
    it('should include the catalog query name in the explanation', () => {
        const componentName = 'example';
        const queryName = 'Fetch Error Logs';
        const queryNamespace = 'catalog';
        const rendered = prepareComponent({
            componentName,
            queryName,
            queryNamespace,
        });
        expect(rendered.getByText(/with the title/)).toBeInTheDocument();
        expect(rendered.getByText(/Fetch Error Logs/)).toBeInTheDocument();
        expect(rendered.getByText(/defined in catalog-info\.yaml did not return any data for component/)).toBeInTheDocument();
    });
    it('should include the catalog query without a name in the explanation', () => {
        const componentName = 'example';
        const queryName = '';
        const queryNamespace = 'catalog';
        const rendered = prepareComponent({
            componentName,
            queryName,
            queryNamespace,
        });
        expect(rendered.getByText(/Query defined in catalog-info\.yaml did not return any data for component/)).toBeInTheDocument();
    });
});
