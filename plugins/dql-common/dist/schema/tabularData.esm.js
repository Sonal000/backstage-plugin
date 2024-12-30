import { z } from 'zod';

var TableTypes = /* @__PURE__ */ ((TableTypes2) => {
  TableTypes2["LINK"] = "link";
  TableTypes2["OBJECT"] = "object";
  return TableTypes2;
})(TableTypes || {});
const tableCell = z.string().or(z.null().or(z.boolean()).or(z.number()).transform(String)).or(
  z.strictObject({
    type: z.literal("link" /* LINK */),
    text: z.string(),
    url: z.string().url()
  })
).or(
  z.array(z.any()).or(z.object({}).passthrough()).transform((obj) => ({
    type: "object" /* OBJECT */,
    content: JSON.stringify(obj, null, 2)
  }))
);
const rowData = z.record(tableCell);
const tabularDataSchema = z.array(rowData);
const TabularDataFactory = {
  fromString: (input) => {
    const data = JSON.parse(input);
    return TabularDataFactory.fromObject(data);
  },
  fromObject: (input) => {
    return tabularDataSchema.parse(input);
  }
};

export { TableTypes, TabularDataFactory };
//# sourceMappingURL=tabularData.esm.js.map
