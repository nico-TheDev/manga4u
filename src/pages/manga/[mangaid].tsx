import Image from 'next/future/image';
import { useRouter } from 'next/router';
import React from 'react';

import useMangaDetails from '@/hooks/useMangaDetails';

import { filterManga } from '@/utils/filterMangaData';
import getCoverImage from '@/utils/getCoverImage';

export default function MangaDetailsPage() {
  const router = useRouter();
  const { mangaId } = router.query;
  const { mangaDetail, isLoading, isError } = useMangaDetails(
    mangaId as string
  );

  const manga = mangaDetail && filterManga(mangaDetail);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error:{isError}</div>;

  return (
    <header className='relative h-[60vh] p-8'>
      <Image
        src={getCoverImage(manga.mangaId, manga.coverName)}
        alt={manga.title}
        className='absolute top-0 left-0 h-full w-full object-cover object-top blur-md brightness-[30%]'
        width={250}
        height={750}
      />
      <div className='relative mx-auto flex w-[90%] gap-8'>
        <Image
          src={getCoverImage(manga.mangaId, manga.coverName)}
          alt={manga.title}
          className='h-70 w-48'
          width={250}
          height={750}
        />
        <div className='text-white'>
          <h2 className='text-md mb-4'>{manga.title}</h2>
          <p className='text-sm'>{manga.description}</p>
        </div>
      </div>
    </header>
  );
}
