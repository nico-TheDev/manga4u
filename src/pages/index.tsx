import Link from 'next/link';
import React from 'react';

import HeaderSlider from '@/components/HeaderSlider';
import SummaryCard from '@/components/SummaryCard';
import TitleSlider from '@/components/TitleSlider';

import apiInstance from '@/api';
import filterMangaData from '@/utils/filterMangaData';

import { MangaSummary } from '@/types/data-types/manga';

type Props = {
  popularMangaList: MangaSummary[];
  latestMangaList: MangaSummary[];
  recentlyAddedMangaList: MangaSummary[];
  completedMangaList: MangaSummary[];
  recommendedMangaList: MangaSummary[];
};

export async function getStaticProps() {
  try {
    const res = await Promise.all([
      apiInstance.get(
        '/manga?limit=30&contentRating[]=safe&order[rating]=desc&includes[]=cover_art'
      ),
      apiInstance.get(
        '/manga?limit=30&contentRating[]=safe&order[updatedAt]=desc&includes[]=cover_art'
      ),
      apiInstance.get(
        '/manga?limit=6&contentRating[]=safe&order[updatedAt]=desc&includes[]=cover_art'
      ),
      apiInstance.get(
        '/manga?limit=30&contentRating[]=safe&order[rating]=desc&includes[]=cover_art&status[]=completed'
      ),
      apiInstance.get(
        '/manga?limit=10&contentRating[]=safe&order[rating]=desc&includes[]=cover_art&status[]=completed'
      ),
    ]);

    const [
      popularData,
      latestData,
      recentlyAddedData,
      completedData,
      recommendedData,
    ] = await Promise.all(res.map((data) => data.data.data));

    const popularMangaList = filterMangaData(popularData);
    const latestMangaList = filterMangaData(latestData);
    const recentlyAddedMangaList = filterMangaData(recentlyAddedData);
    const completedMangaList = filterMangaData(completedData);
    const recommendedMangaList = filterMangaData(recommendedData);

    return {
      props: {
        popularMangaList,
        latestMangaList,
        recentlyAddedMangaList,
        completedMangaList,
        recommendedMangaList,
      },
    };
  } catch (err) {
    return { props: {} };
  }
}

export default function HomePage({
  popularMangaList,
  latestMangaList,
  completedMangaList,
  recentlyAddedMangaList,
  recommendedMangaList,
}: Props) {
  return (
    <>
      {/* HEADER SLIDER */}
      <HeaderSlider mangaList={recommendedMangaList} />
      {/* SLIDER */}
      <TitleSlider title='Most Popular' mangaList={popularMangaList} />
      <TitleSlider title='Completed Gems' mangaList={completedMangaList} />
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

        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2'>
          {recentlyAddedMangaList.map((manga: MangaSummary) => (
            <SummaryCard key={manga.mangaId} manga={manga} />
          ))}
        </div>
      </div>
      {/* SLIDER */}
      <TitleSlider title='Latest' mangaList={latestMangaList} />
    </>
  );
}
