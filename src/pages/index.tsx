import * as React from 'react';

import Header from '@/components/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <Header />
    </Layout>
  );
}
