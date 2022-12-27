import { AppProps } from 'next/app';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

import AppProvider from '../components/AppContext';

import './styles.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

const uri = 'https://api.hashnode.com';

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  );
}
