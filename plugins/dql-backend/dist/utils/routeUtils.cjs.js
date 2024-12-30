'use strict';

var backstagePluginDqlCommon = require('@dynatrace/backstage-plugin-dql-common');

const getEntityFromRequest = async (req, client, auth) => {
  const entityRef = req.query?.entityRef;
  if (typeof entityRef !== "string" || !entityRef) {
    throw new Error("Invalid entity ref");
  }
  const { token } = await auth.getPluginRequestToken({
    onBehalfOf: await auth.getOwnServiceCredentials(),
    targetPluginId: "catalog"
  });
  if (!token) {
    throw new Error(`Failed to get service token`);
  }
  const entity = await client.getEntityByRef(entityRef, { token });
  if (!entity) {
    throw new Error(`Entity ref "${entityRef}" not found`);
  }
  return entity;
};
const validateQueries = (extendedEntity) => {
  const parsedQuery = backstagePluginDqlCommon.dynatraceCatalogQuerySchema.safeParse(
    extendedEntity.metadata.dynatrace?.queries
  );
  if (parsedQuery.error) {
    const zodError = parsedQuery.error.errors.map(
      (error) => `"${error.message}" at metadata/dynatrace/queries/${error.path.join(
        "/"
      )}`
    ).join("\n");
    throw new Error(`Invalid custom catalog queries.
${zodError}`);
  }
  return parsedQuery.data;
};

exports.getEntityFromRequest = getEntityFromRequest;
exports.validateQueries = validateQueries;
//# sourceMappingURL=routeUtils.cjs.js.map
