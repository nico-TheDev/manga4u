import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Nav from '@/components/layout/Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
