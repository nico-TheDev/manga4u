import moment from 'moment';
import Image from 'next/future/image';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';

import getCoverImage from '@/utils/getCoverImage';
import trimString from '@/utils/trimString';

import { MangaSummary } from '@/types/data-types/manga';

type Props = {
  manga: MangaSummary;
};

export default function SummaryCard({ manga }: Props) {
  const router = useRouter();

  const handleClick = () => router.push(`/manga/${manga.mangaId}`);

  return (
    <div className=' flex  gap-5 bg-secondary-dark pr-4 text-white '>
      <Image
        src={getCoverImage(manga.mangaId, manga.coverName)}
        alt='cover'
        className='h-40 w-28'
        width={256}
        height={512}
      />

      <div className='p-4'>
        <h6 className='text-md mb-2 font-bold'>
          {trimString(manga.title, 40)}
        </h6>
        <p className='mb-8 text-sm'>Chapter 1063</p>
        <Button
          variant='primary'
          className='text-md hover:translate-y-0'
          onClick={handleClick}
        >
          Start Reading
        </Button>
      </div>

      <span className='ml-auto inline-block self-start whitespace-nowrap p-4'>
        {moment(manga.lastUpdated).startOf('hour').fromNow()}
      </span>
    </div>
  );
}
