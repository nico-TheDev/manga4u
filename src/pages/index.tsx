import Link from 'next/link';
import * as React from 'react';

import HeaderSlider from '@/components/HeaderSlider';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import SummaryCard from '@/components/SummaryCard';
import TitleSlider from '@/components/TitleSlider';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      {/* HEADER SLIDER */}
      <HeaderSlider />
      {/* SLIDER */}
      <TitleSlider title='Most Popular' />
      {/* RECENTLY ADDED */}
      <div className='mx-auto my-14 w-[90%] '>
        <div className='mb-8 flex w-full items-center justify-between'>
          <h2 className='text-white'>Recently Added</h2>

          <Link href=''>
            <a className='text-md rounded-md border-2 border-primary-main px-8 py-2 uppercase text-primary-main transition-all duration-300 hover:bg-primary-main hover:text-white'>
              See More
            </a>
          </Link>
        </div>

        <div className='grid grid-cols-2 gap-10'>
          <SummaryCard />
          <SummaryCard />
          <SummaryCard />
          <SummaryCard />
        </div>
      </div>
      {/* SLIDER */}
      <TitleSlider title='Latest' />
    </Layout>
  );
}
