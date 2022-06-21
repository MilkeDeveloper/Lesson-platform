import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oy00cm1lk101w72r7n6568/master',
    cache: new InMemoryCache()

})