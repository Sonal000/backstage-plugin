import { CodeSnippet } from '@backstage/core-components';
import { withStyles, DialogTitle as DialogTitle$1, Typography, IconButton, createStyles, Link, Dialog, DialogContent } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import React, { useState } from 'react';

const styles = (theme) => createStyles({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(2)
  },
  closeButton: {
    color: theme.palette.grey[500]
  }
});
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return /* @__PURE__ */ React.createElement(DialogTitle$1, { disableTypography: true, className: classes.root, ...other }, /* @__PURE__ */ React.createElement("div", { className: classes.flex }, /* @__PURE__ */ React.createElement(Typography, { variant: "h6" }, children), /* @__PURE__ */ React.createElement(
    IconButton,
    {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: () => onClose()
    },
    /* @__PURE__ */ React.createElement(CloseIcon, null)
  )));
});
const ObjectModal = ({ data, property }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onComplexRecordClick = () => {
    setIsOpen(true);
  };
  const onModalClose = () => {
    setIsOpen(false);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Link,
    {
      component: "button",
      variant: "body2",
      onClick: () => onComplexRecordClick(),
      style: { minWidth: "120px" }
    },
    "Complex record"
  ), /* @__PURE__ */ React.createElement(
    Dialog,
    {
      open: isOpen,
      onClose: () => onModalClose(),
      "aria-labelledby": "object-dialog-title"
    },
    /* @__PURE__ */ React.createElement(DialogTitle, { id: "object-dialog-title", onClose: onModalClose }, 'Complex record of "', property, '"'),
    /* @__PURE__ */ React.createElement(DialogContent, { dividers: true }, /* @__PURE__ */ React.createElement(CodeSnippet, { text: data, language: "json" }))
  ));
};

export { ObjectModal };
//# sourceMappingURL=ObjectModal.esm.js.map
