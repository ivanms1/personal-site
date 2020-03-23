import Head from 'next/head';

import styles from './index.module.css';

const Home = () => (
  <div className={styles.Container}>
    <Head>
      <title>Ivan Saldano</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <div></div>
  </div>
);

export default Home;
