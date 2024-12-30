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
import { CatalogIcon, Content, DocsIcon, Header, Page, } from '@backstage/core-components';
import { useApi } from '@backstage/core-plugin-api';
import { CatalogSearchResultListItem } from '@backstage/plugin-catalog';
import { CATALOG_FILTER_EXISTS, catalogApiRef, } from '@backstage/plugin-catalog-react';
import { SearchType } from '@backstage/plugin-search';
import { SearchBar, SearchFilter, SearchPagination, SearchResult, useSearch, } from '@backstage/plugin-search-react';
import { TechDocsSearchResultListItem } from '@backstage/plugin-techdocs';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    bar: {
        padding: theme.spacing(1, 0),
    },
    filters: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    filter: {
        '& + &': {
            marginTop: theme.spacing(2.5),
        },
    },
}));
const SearchPage = () => {
    const classes = useStyles();
    const { types } = useSearch();
    const catalogApi = useApi(catalogApiRef);
    return (React.createElement(Page, { themeId: "home" },
        React.createElement(Header, { title: "Search" }),
        React.createElement(Content, null,
            React.createElement(Grid, { container: true, direction: "row" },
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Paper, { className: classes.bar },
                        React.createElement(SearchBar, null))),
                React.createElement(Grid, { item: true, xs: 3 },
                    React.createElement(SearchType.Accordion, { name: "Result Type", defaultValue: "software-catalog", types: [
                            {
                                value: 'software-catalog',
                                name: 'Software Catalog',
                                icon: React.createElement(CatalogIcon, null),
                            },
                            {
                                value: 'techdocs',
                                name: 'Documentation',
                                icon: React.createElement(DocsIcon, null),
                            },
                        ] }),
                    React.createElement(Paper, { className: classes.filters },
                        types.includes('techdocs') && (React.createElement(SearchFilter.Select, { className: classes.filter, label: "Entity", name: "name", values: async () => {
                                // Return a list of entities which are documented.
                                const { items } = await catalogApi.getEntities({
                                    fields: ['metadata.name'],
                                    filter: {
                                        'metadata.annotations.backstage.io/techdocs-ref': CATALOG_FILTER_EXISTS,
                                    },
                                });
                                const names = items.map(entity => entity.metadata.name);
                                names.sort();
                                return names;
                            } })),
                        React.createElement(SearchFilter.Select, { className: classes.filter, label: "Kind", name: "kind", values: ['Component', 'Template'] }),
                        React.createElement(SearchFilter.Checkbox, { className: classes.filter, label: "Lifecycle", name: "lifecycle", values: ['experimental', 'production'] }))),
                React.createElement(Grid, { item: true, xs: 9 },
                    React.createElement(SearchPagination, null),
                    React.createElement(SearchResult, null,
                        React.createElement(CatalogSearchResultListItem, { icon: React.createElement(CatalogIcon, null) }),
                        React.createElement(TechDocsSearchResultListItem, { icon: React.createElement(DocsIcon, null) })))))));
};
export const searchPage = React.createElement(SearchPage, null);
