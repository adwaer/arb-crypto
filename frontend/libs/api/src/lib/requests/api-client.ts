import {ApolloClient, DocumentNode, InMemoryCache, NormalizedCacheObject} from "@apollo/client";
import {OperationVariables} from "@apollo/client/core/types";
import {GqlResponse} from "./grapghql/gql-response";

const getClient = (apiUrl: string) => new ApolloClient({
    uri: `${apiUrl}/graphql`,
    cache: new InMemoryCache(),
});

let gqlClient: ApolloClient<NormalizedCacheObject>;

export const initApiClient = (apiUrl: string) => {
    gqlClient = getClient(apiUrl);
}

export const apiClient = {
    query: async (variable: OperationVariables, query: DocumentNode) => {
        const response = await gqlClient.query<GqlResponse>({
            variables: variable,
            query: query,
        });
        return response.data;
    }
}
