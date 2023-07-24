import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import 'cross-fetch/polyfill'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined
const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'https://hasura-noko206.hasura.app/v1/graphql',
    }),

    cache: new InMemoryCache(),
  })
}
export const initializeApollo = (initialState = null) => {
  const _apolloClient = apolloClient ?? createApolloClient()
  // SSGやSSRなどサーバサイド処理の場合
  if (typeof window === 'undefined') return _apolloClient
  // クライアントサイド処理の場合
  if (!apolloClient) apolloClient = _apolloClient
  return _apolloClient
}
