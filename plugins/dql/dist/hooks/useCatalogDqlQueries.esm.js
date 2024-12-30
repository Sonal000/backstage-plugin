import { dqlQueryApiRef } from '../api/index.esm.js';
import { useApi, identityApiRef } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';

const useCatalogDqlQueries = (namespace, entityRef) => {
  const dqlQueryApi = useApi(dqlQueryApiRef);
  const identityApi = useApi(identityApiRef);
  const { value, loading, error } = useAsync(async () => {
    const { token } = await identityApi.getCredentials();
    if (!token) {
      throw new Error(`Failed to get identity token`);
    }
    return await dqlQueryApi.getDataFromQueries(namespace, entityRef, token);
  }, [dqlQueryApi, namespace, entityRef]);
  return {
    error,
    loading,
    value
  };
};

export { useCatalogDqlQueries };
//# sourceMappingURL=useCatalogDqlQueries.esm.js.map
