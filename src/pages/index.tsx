import Link from 'next/link';
import React from 'react';

import HeaderSlider from '@/components/HeaderSlider';
import SummaryCard from '@/components/SummaryCard';
import TitleSlider from '@/components/TitleSlider';

import apiInstance from '@/api';
import { filterMangaData } from '@/utils/filterMangaData';

import { Chapter } from '@/types/data-types/chapter';
import { MangaData, MangaSummary } from '@/types/data-types/manga';
import { Relationship } from '@/types/data-types/relationship';

type Props = {
  popularMangaList: MangaSummary[];
  latestMangaList: MangaSummary[];
  completedMangaList: MangaSummary[];
  recommendedMangaList: MangaSummary[];
  recentChapters: Chapter[];
  recent: { mangaId: string; latestChapter: string; latestDate?: string }[];
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
        '/chapter?includes[]=manga&includes[]=scanlation_group&contentRating[]=safe&contentRating[]=suggestive&contentRating[]=erotica&order[readableAt]=desc&offset=0&limit=14&translatedLanguage[]=en'
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
    const recentlyAddedMangaList = recentlyAddedData.map((manga: Chapter) => {
      const currentManga: MangaData = manga?.relationships?.find(
        (item: Relationship<MangaData>) => item.type === 'manga'
      );
      return {
        latestChapter: manga.attributes.chapter,
        mangaId: currentManga.id,
        latestDate: manga.attributes.readableAt,
      };
    });

    const completedMangaList = filterMangaData(completedData);
    const recommendedMangaList = filterMangaData(recommendedData);
    return {
      props: {
        popularMangaList,
        latestMangaList,
        completedMangaList,
        recommendedMangaList,
        recent: recentlyAddedMangaList,
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
  recommendedMangaList,
  recent,
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
          {recent.map((item, i) => (
            <SummaryCard key={item.mangaId + i} manga={item} />
          ))}
        </div>
      </div>
      {/* SLIDER */}
      <TitleSlider title='Latest' mangaList={latestMangaList} />
    </>
  );
}
