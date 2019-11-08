import { createClient, createCache } from 'react-fetching-library';

// https://marcin-piela.github.io/react-fetching-library/#/?id=cache-provider
const cache = createCache(
  (action) => {
    // We cache only `GET` requests.
    return action.method === 'GET';
  },

  (response) => {
    // We deem the downloaded data stale after 2 minutes.
    return new Date().getTime() - response.timestamp < 120000;
  },
);

// https://marcin-piela.github.io/react-fetching-library/#/?id=usage
const httpService = createClient({
  cacheProvider: cache,
});

export default httpService;
