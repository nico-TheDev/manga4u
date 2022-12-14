import React from 'react';

import MangaPageList from '@/components/shared/MangaPageList';

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
  return <MangaPageList title='Popular Page' mangaList={popularManga} />;
}

export default PopularPage;
