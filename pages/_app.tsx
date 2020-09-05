import { AppProps } from 'next/app';
import fetch from 'cross-fetch';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

const uri = 'https://api.hashnode.com';

const client = new ApolloClient({
  link: new HttpLink({ uri, fetch }),
  cache: new InMemoryCache(),
});

import './styles.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
