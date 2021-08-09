import { AppProps } from 'next/dist/next-server/lib/router/router';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Next app</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
