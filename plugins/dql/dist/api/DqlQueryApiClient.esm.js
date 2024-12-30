import { ResponseError } from '@backstage/errors';
import { TabularDataFactory } from '@dynatrace/backstage-plugin-dql-common';

class DqlQueryApiClient {
  discoveryApi;
  constructor(options) {
    this.discoveryApi = options.discoveryApi;
  }
  async getData(queryNamespace, queryName, entityRef, identityToken) {
    const baseUrl = await this.discoveryApi.getBaseUrl("dynatrace-dql");
    const searchParams = new URLSearchParams({ entityRef });
    const url = `${baseUrl}/${queryNamespace}/${queryName}?${searchParams}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${identityToken}`
      }
    });
    if (response.status === 404) {
      throw new Error(`Query ${queryNamespace}/${queryName} does not exist.`);
    } else if (response.status !== 200) {
      throw await ResponseError.fromResponse(response);
    }
    const jsonResponse = await response.json();
    return TabularDataFactory.fromObject(jsonResponse);
  }
  async getDataFromQueries(queryNamespace, entityRef, identityToken) {
    const baseUrl = await this.discoveryApi.getBaseUrl("dynatrace-dql");
    const searchParams = new URLSearchParams({ entityRef });
    const url = `${baseUrl}/${queryNamespace}?${searchParams}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${identityToken}`
      }
    });
    if (response.status === 404) {
      throw new Error(`Query ${queryNamespace} does not exist.`);
    } else if (response.status !== 200) {
      throw await ResponseError.fromResponse(response);
    }
    const jsonResponse = await response.json();
    jsonResponse.forEach((element) => {
      TabularDataFactory.fromObject(element.data);
    });
    return jsonResponse;
  }
}

export { DqlQueryApiClient };
//# sourceMappingURL=DqlQueryApiClient.esm.js.map
