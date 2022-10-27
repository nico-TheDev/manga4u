import useSWR, { Fetcher } from 'swr';

import apiInstance from '@/api';

import { MangaData } from '@/types/data-types/manga';

const fetcher: Fetcher<MangaData, string> = (url) =>
  apiInstance.get(url).then((res) => res.data.data);

const useCover = (id: string) => {
  const { data, error } = useSWR(`/manga/${id}`, fetcher);

  return {
    chapter: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useCover;
