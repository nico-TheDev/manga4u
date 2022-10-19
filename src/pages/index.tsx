import Link from 'next/link';
import React from 'react';

import HeaderSlider from '@/components/HeaderSlider';
import SummaryCard from '@/components/SummaryCard';
import TitleSlider from '@/components/TitleSlider';

import { MangaData } from '@/types/data-types/manga';

type Props = {
  data: MangaData[];
};

export default function HomePage({ data }: Props) {
  return (
    <>
      {/* HEADER SLIDER */}
      <HeaderSlider />
      {/* SLIDER */}
      <TitleSlider title='Most Popular' mangaList={data} />
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
      <TitleSlider title='Latest' mangaList={data} />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    'https://api.mangadex.org/manga?limit=20&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[createdAt]=desc&includes[]=cover_art'
  );

  const data: MangaData[] = await res.json();
  return { props: data };
}
