import Image from 'next/future/image';
import React from 'react';

import Button from '@/components/buttons/Button';
import Pill from '@/components/Pill';

import getCoverImage from '@/utils/getCoverImage';
import trimString from '@/utils/trimString';

import { MangaSummary } from '@/types/data-types/manga';

type Props = {
  manga: MangaSummary;
};

export default function Header({ manga }: Props) {
  return (
    <header className='relative flex h-[60vh] items-center py-4'>
      <Image
        src={getCoverImage(manga.mangaId, manga.coverName)}
        className='absolute top-0 left-0 h-full w-full object-cover object-top blur-sm brightness-[30%]'
        width={512}
        height={400}
        alt={manga.title}
      />
      <div className='relative mx-auto w-[90%] text-white'>
        <h2 className='mb-4'>{manga.title}</h2>
        {/* GENRE LIST */}
        <ul className='mb-4 flex items-center gap-2'>
          {manga.tags.map((genre) => (
            <li key={genre}>
              <Pill genre={genre} />
            </li>
          ))}
        </ul>

        <p className='mb-8 max-w-xl'>{trimString(manga.description)}</p>

        <Button variant='primary' className='text-sm uppercase'>
          Read More
        </Button>
      </div>
    </header>
  );
}
