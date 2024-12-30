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
import { CodeSnippet } from '@backstage/core-components';
import { createStyles, Dialog, DialogContent, DialogTitle as MuiDialogTitle, IconButton, Link, Typography, withStyles, } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';
const styles = (theme) => createStyles({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    flex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing(2),
    },
    closeButton: {
        color: theme.palette.grey[500],
    },
});
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (React.createElement(MuiDialogTitle, { disableTypography: true, className: classes.root, ...other },
        React.createElement("div", { className: classes.flex },
            React.createElement(Typography, { variant: "h6" }, children),
            React.createElement(IconButton, { "aria-label": "close", className: classes.closeButton, onClick: () => onClose() },
                React.createElement(CloseIcon, null)))));
});
export const ObjectModal = ({ data, property }) => {
    const [isOpen, setIsOpen] = useState(false);
    const onComplexRecordClick = () => {
        setIsOpen(true);
    };
    const onModalClose = () => {
        setIsOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Link, { component: "button", variant: "body2", onClick: () => onComplexRecordClick(), style: { minWidth: '120px' } }, "Complex record"),
        React.createElement(Dialog, { open: isOpen, onClose: () => onModalClose(), "aria-labelledby": 'object-dialog-title' },
            React.createElement(DialogTitle, { id: "object-dialog-title", onClose: onModalClose },
                "Complex record of \"",
                property,
                "\""),
            React.createElement(DialogContent, { dividers: true },
                React.createElement(CodeSnippet, { text: data, language: 'json' })))));
};
