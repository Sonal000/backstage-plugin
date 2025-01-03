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
import LogoFull from './LogoFull';
import LogoIcon from './LogoIcon';
import { Link, Sidebar, SidebarDivider, SidebarGroup, SidebarItem, SidebarPage, SidebarScrollWrapper, SidebarSpace, sidebarConfig, useSidebarOpenState, } from '@backstage/core-components';
import { SidebarSearchModal } from '@backstage/plugin-search';
import { Settings as SidebarSettings, UserSettingsSignInAvatar, } from '@backstage/plugin-user-settings';
import { makeStyles } from '@material-ui/core';
import CreateComponentIcon from '@material-ui/icons/AddCircleOutline';
import ExtensionIcon from '@material-ui/icons/Extension';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import MenuIcon from '@material-ui/icons/Menu';
import MapIcon from '@material-ui/icons/MyLocation';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
const useSidebarLogoStyles = makeStyles({
    root: {
        width: sidebarConfig.drawerWidthClosed,
        height: 3 * sidebarConfig.logoHeight,
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        marginBottom: -14,
    },
    link: {
        width: sidebarConfig.drawerWidthClosed,
        marginLeft: 24,
    },
});
const SidebarLogo = () => {
    const classes = useSidebarLogoStyles();
    const { isOpen } = useSidebarOpenState();
    return (React.createElement("div", { className: classes.root },
        React.createElement(Link, { to: "/", underline: "none", className: classes.link, "aria-label": "Home" }, isOpen ? React.createElement(LogoFull, null) : React.createElement(LogoIcon, null))));
};
export const Root = ({ children }) => (React.createElement(SidebarPage, null,
    React.createElement(Sidebar, null,
        React.createElement(SidebarLogo, null),
        React.createElement(SidebarGroup, { label: "Search", icon: React.createElement(SearchIcon, null), to: "/search" },
            React.createElement(SidebarSearchModal, null)),
        React.createElement(SidebarDivider, null),
        React.createElement(SidebarGroup, { label: "Menu", icon: React.createElement(MenuIcon, null) },
            React.createElement(SidebarItem, { icon: HomeIcon, to: "catalog", text: "Home" }),
            React.createElement(SidebarItem, { icon: ExtensionIcon, to: "api-docs", text: "APIs" }),
            React.createElement(SidebarItem, { icon: LibraryBooks, to: "docs", text: "Docs" }),
            React.createElement(SidebarItem, { icon: CreateComponentIcon, to: "create", text: "Create..." }),
            React.createElement(SidebarDivider, null),
            React.createElement(SidebarScrollWrapper, null,
                React.createElement(SidebarItem, { icon: MapIcon, to: "tech-radar", text: "Tech Radar" }))),
        React.createElement(SidebarSpace, null),
        React.createElement(SidebarDivider, null),
        React.createElement(SidebarGroup, { label: "Settings", icon: React.createElement(UserSettingsSignInAvatar, null), to: "/settings" },
            React.createElement(SidebarSettings, null))),
    children));
