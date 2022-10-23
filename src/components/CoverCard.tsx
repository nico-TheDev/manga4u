import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';

import placeholderCover from '@/assets/img/no-cover.png';
import getCoverImage from '@/utils/getCoverImage';
import trimString from '@/utils/trimString';

import { Genre, MangaSummary } from '@/types/data-types/manga';

type CardProps = {
  manga: MangaSummary;
};

export default function CoverCard({ manga }: CardProps) {
  const { mangaId, title, coverName, tags } = manga;

  const mangaCover = coverName
    ? getCoverImage(mangaId, coverName)
    : placeholderCover;

  return (
    <Link href={`/manga/${mangaId}`}>
      <a className='group relative block h-72 overflow-hidden'>
        <Image
          src={mangaCover}
          width={256}
          height={512}
          alt='Cover'
          className='block h-72 object-cover transition-all duration-300 group-hover:blur-sm group-hover:brightness-[30%]'
        />

        <div className='absolute top-0 left-0 flex h-full w-full -translate-y-2 flex-col items-center justify-center p-2 text-center text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
          <h4 className='text-md mb-2 text-clip'>{trimString(title, 70)}</h4>
          <p className='flex flex-wrap items-center justify-center gap-2 text-xs'>
            {tags.slice(0, 5).map((tag: Genre) => (
              <span key={tag.id}>{tag.genre}</span>
            ))}
          </p>
        </div>
      </a>
    </Link>
  );
}
