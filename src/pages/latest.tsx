import React from 'react';

import MangaPageList from '@/components/shared/MangaPageList';

import apiInstance from '@/api';
import { filterMangaData } from '@/utils/filterMangaData';

import { MangaSummary } from '@/types/data-types/manga';

interface IProps {
  latestManga: MangaSummary[];
}

export async function getStaticProps() {
  try {
    const res = await apiInstance.get(
      `/manga?limit=30&contentRating[]=safe&order[updatedAt]=desc&includes[]=cover_art`
    );

    const data = await res.data.data;

    const latestManga = filterMangaData(data);

    return {
      props: {
        latestManga,
      },
    };
  } catch (err) {
    // console.log(err);

    return {
      props: {},
    };
  }
}

function LatestPage({ latestManga }: IProps) {
  // console.log(popularManga);
  return <MangaPageList title='Latest Manga' mangaList={latestManga} />;
}

export default LatestPage;
