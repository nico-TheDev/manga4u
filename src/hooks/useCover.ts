import useSWR, { Fetcher } from 'swr';

import apiInstance from '@/api';

import { MangaData } from '@/types/data-types/manga';

const fetcher: Fetcher<MangaData, string> = (url) =>
  apiInstance.get(url).then((res) => res.data.data);

const useManga = (id: string) => {
  const { data, error } = useSWR(`/manga/${id}?includes[]=cover_art`, fetcher);

  return {
    mangaDetail: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useManga;
