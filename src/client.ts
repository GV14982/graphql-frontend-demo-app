import { Client, cacheExchange, fetchExchange } from 'urql';

export const client = new Client({
  url: 'https://countries.trevorblades.com/graphql',
  exchanges: [cacheExchange, fetchExchange],
});
