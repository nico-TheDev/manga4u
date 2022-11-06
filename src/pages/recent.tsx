import React from 'react';

import MangaPageList from '@/components/shared/MangaPageList';

import apiInstance from '@/api';
import { filterMangaData } from '@/utils/filterMangaData';

import { MangaSummary } from '@/types/data-types/manga';

interface IProps {
  recentManga: MangaSummary[];
}

export async function getStaticProps() {
  try {
    const res = await apiInstance.get(
      `/manga?limit=30&contentRating[]=safe&order[latestUploadedChapter]=desc&includes[]=cover_art`
    );

    const data = await res.data.data;

    const recentManga = filterMangaData(data);

    return {
      props: {
        recentManga,
      },
    };
  } catch (err) {
    // console.log(err);

    return {
      props: {},
    };
  }
}

function RecentPage({ recentManga }: IProps) {
  // console.log(popularManga);
  return <MangaPageList title='Recently Added Manga' mangaList={recentManga} />;
}

export default RecentPage;
