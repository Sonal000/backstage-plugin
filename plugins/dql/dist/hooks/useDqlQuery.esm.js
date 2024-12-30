import { dqlQueryApiRef } from '../api/index.esm.js';
import { useApi, identityApiRef } from '@backstage/core-plugin-api';
import useAsync from 'react-use/lib/useAsync';

const useDqlQuery = (namespace, queryName, entityRef) => {
  const dqlQueryApi = useApi(dqlQueryApiRef);
  const identityApi = useApi(identityApiRef);
  const { value, loading, error } = useAsync(async () => {
    const { token } = await identityApi.getCredentials();
    if (!token) {
      throw new Error(`Failed to get identity token`);
    }
    return await dqlQueryApi.getData(namespace, queryName, entityRef, token);
  }, [dqlQueryApi, namespace, queryName, entityRef]);
  return {
    error,
    loading,
    value
  };
};

export { useDqlQuery };
//# sourceMappingURL=useDqlQuery.esm.js.map
