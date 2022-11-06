import Image from 'next/future/image';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  const handleClick = () => {
    router.push(`manga/${manga.mangaId}`);
  };

  return (
    <header className='relative flex h-max items-center justify-center md:h-[60vh]'>
      {/* BACKGROUND */}
      <Image
        src={getCoverImage(manga.mangaId, manga.coverName)}
        className='absolute top-0 left-0 h-full w-full object-cover object-center blur-md brightness-[30%]'
        width={512}
        height={400}
        alt={manga.title}
      />
      <div className='z-20 flex w-[80%] flex-col items-center justify-center gap-10 py-8 md:flex-row md:justify-start md:py-0'>
        {/* COVER */}
        <Image
          src={getCoverImage(manga.mangaId, manga.coverName)}
          className='z-10 aspect-[2/3] h-full w-48'
          width={512}
          height={400}
          alt={manga.title}
        />
        <div className='relative flex flex-col items-center justify-center text-white md:items-start'>
          <h2 className='mb-4'>{manga.title}</h2>
          {/* GENRE LIST */}
          <ul className='mb-4 flex flex-wrap items-center gap-1'>
            {manga.tags.map((tag) => (
              <li key={tag.id}>
                <Pill genre={tag.genre} id={tag.id} />
              </li>
            ))}
          </ul>
          <p className='mb-8 max-w-3xl'>{trimString(manga.description, 220)}</p>
          <Button
            variant='primary'
            className='text-sm uppercase'
            onClick={handleClick}
          >
            Start Reading
          </Button>
        </div>
      </div>
    </header>
  );
}
