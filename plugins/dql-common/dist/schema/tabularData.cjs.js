'use strict';

var zod = require('zod');

var TableTypes = /* @__PURE__ */ ((TableTypes2) => {
  TableTypes2["LINK"] = "link";
  TableTypes2["OBJECT"] = "object";
  return TableTypes2;
})(TableTypes || {});
const tableCell = zod.z.string().or(zod.z.null().or(zod.z.boolean()).or(zod.z.number()).transform(String)).or(
  zod.z.strictObject({
    type: zod.z.literal("link" /* LINK */),
    text: zod.z.string(),
    url: zod.z.string().url()
  })
).or(
  zod.z.array(zod.z.any()).or(zod.z.object({}).passthrough()).transform((obj) => ({
    type: "object" /* OBJECT */,
    content: JSON.stringify(obj, null, 2)
  }))
);
const rowData = zod.z.record(tableCell);
const tabularDataSchema = zod.z.array(rowData);
const TabularDataFactory = {
  fromString: (input) => {
    const data = JSON.parse(input);
    return TabularDataFactory.fromObject(data);
  },
  fromObject: (input) => {
    return tabularDataSchema.parse(input);
  }
};

exports.TableTypes = TableTypes;
exports.TabularDataFactory = TabularDataFactory;
//# sourceMappingURL=tabularData.cjs.js.map
