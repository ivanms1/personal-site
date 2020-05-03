import { AppProps } from 'next/app';

import './styles.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
