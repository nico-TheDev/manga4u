import moment from 'moment';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import React from 'react';

import useCover from '@/hooks/useCover';

import Button from '@/components/buttons/Button';

import getCoverImage from '@/utils/getCoverImage';
import trimString from '@/utils/trimString';

import { MangaSummary } from '@/types/data-types/manga';

type Props = {
  manga: MangaSummary;
};

export default function SummaryCard({ manga }: Props) {
  const router = useRouter();
  const { isLoading, isError } = useCover(manga.mangaId);

  const handleClick = () => router.push(`/manga/${manga.mangaId}`);

  if (isLoading)
    return (
      <div className='animated flex animate-pulse bg-secondary-dark pr-4'></div>
    );

  if (isError)
    return (
      <p className='flex bg-secondary-dark p-4 text-red-500'>
        Something Went Wrong!
      </p>
    );

  return (
    <div className='flex items-center gap-5 bg-secondary-dark pr-4 text-white '>
      <Image
        src={getCoverImage(manga.mangaId, manga.coverName)}
        alt={manga.title}
        className='block h-full w-36 object-cover md:h-60 md:w-40'
        width={256}
        height={512}
      />

      <div className='flex h-full flex-1 flex-col items-start justify-between gap-4 p-4 text-sm'>
        <h6 className='text-lg font-bold'>{trimString(manga.title, 40)}</h6>
        <p className=''>Chapter {manga.lastChapter || '?'}</p>
        <p className=''>
          {moment(manga.lastUpdated).startOf('minute').fromNow()}
        </p>
        <Button
          variant='primary'
          className='whitespace-nowrap hover:translate-y-0'
          onClick={handleClick}
        >
          Start Reading
        </Button>
      </div>
    </div>
  );
}
