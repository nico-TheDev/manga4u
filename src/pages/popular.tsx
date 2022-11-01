import React from 'react';

import CoverCard from '@/components/CoverCard';
import PageHead from '@/components/shared/PageHead';

import apiInstance from '@/api';
import { filterMangaData } from '@/utils/filterMangaData';

import { MangaSummary } from '@/types/data-types/manga';

interface IProps {
  popularManga: MangaSummary[];
}

export async function getStaticProps() {
  try {
    const res = await apiInstance.get(
      `/manga?limit=30&contentRating[]=safe&order[rating]=desc&includes[]=cover_art`
    );

    const data = await res.data.data;

    const popularManga = filterMangaData(data);

    return {
      props: {
        popularManga,
      },
    };
  } catch (err) {
    // console.log(err);

    return {
      props: {},
    };
  }
}

function PopularPage({ popularManga }: IProps) {
  // console.log(popularManga);
  return (
    <PageHead title='Popular Manga'>
      <div className='grid auto-rows-[18rem] grid-cols-1 place-items-center  gap-10 sm:grid-cols-3 md:grid-cols-5'>
        {popularManga.map((manga: MangaSummary) => (
          <CoverCard key={manga.mangaId} manga={manga} />
        ))}
      </div>
    </PageHead>
  );
}

export default PopularPage;
