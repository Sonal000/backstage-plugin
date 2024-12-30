'use strict';

var zod = require('zod');

const entityQuerySchema = zod.z.object({
  /**
   * The id of the query.
   */
  id: zod.z.string(),
  /**
   * The query itself.
   */
  query: zod.z.string(),
  /**
   * The description of the query.
   */
  description: zod.z.string().optional(),
  /**
   * The environments in which the query is executed.
   */
  environments: zod.z.array(zod.z.string()).optional()
});
const dynatraceCatalogQuerySchema = zod.z.array(entityQuerySchema).min(1);

exports.dynatraceCatalogQuerySchema = dynatraceCatalogQuerySchema;
//# sourceMappingURL=dynatraceQueries.cjs.js.map
