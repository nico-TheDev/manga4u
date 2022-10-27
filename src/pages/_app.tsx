import { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
      }}
    >
      <Layout>
        <Seo />
        <Component {...pageProps} />;
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
