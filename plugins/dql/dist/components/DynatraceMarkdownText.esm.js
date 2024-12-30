import dynatrace from './dynatrace.svg';
import { MarkdownContent } from '@backstage/core-components';
import { Grid } from '@material-ui/core';
import React from 'react';

const DynatraceMarkdownText = ({
  content
}) => {
  return /* @__PURE__ */ React.createElement(Grid, { container: true, spacing: 2 }, /* @__PURE__ */ React.createElement(Grid, { item: true, sm: 12, md: 6 }, /* @__PURE__ */ React.createElement(MarkdownContent, { content })), /* @__PURE__ */ React.createElement(Grid, { item: true, sm: 12, md: 6 }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: dynatrace,
      alt: "Dynatrace Logo",
      style: {
        width: "60%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        opacity: 0.5
      }
    }
  )));
};

export { DynatraceMarkdownText };
//# sourceMappingURL=DynatraceMarkdownText.esm.js.map
