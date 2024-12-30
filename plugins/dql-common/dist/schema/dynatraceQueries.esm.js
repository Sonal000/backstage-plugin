import { z } from 'zod';

const entityQuerySchema = z.object({
  /**
   * The id of the query.
   */
  id: z.string(),
  /**
   * The query itself.
   */
  query: z.string(),
  /**
   * The description of the query.
   */
  description: z.string().optional(),
  /**
   * The environments in which the query is executed.
   */
  environments: z.array(z.string()).optional()
});
const dynatraceCatalogQuerySchema = z.array(entityQuerySchema).min(1);

export { dynatraceCatalogQuerySchema };
//# sourceMappingURL=dynatraceQueries.esm.js.map
