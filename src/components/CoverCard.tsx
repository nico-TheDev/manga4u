import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';

import placeholderCover from '@/assets/img/no-cover.png';
import getCoverImage from '@/utils/getCoverImage';

import { Relationship } from '@/types/data-types/relationship';
import { Tag } from '@/types/data-types/tag';

type CardProps = {
  mangaId: string;
  title: string;
  author: string;
  tags: Tag[];
  relationships: Relationship[];
};

export default function CoverCard({
  mangaId,
  title,
  author,
  tags,
  relationships,
}: CardProps) {
  const coverArtObj: Relationship | undefined = relationships.find(
    (item: Relationship) => item.type === 'cover_art'
  );

  const mangaCover = getCoverImage(mangaId, coverArtObj?.attributes?.fileName);

  return (
    <Link href={`/manga/${mangaId}`}>
      <a className='group relative h-72 overflow-hidden'>
        <Image
          src={mangaCover || placeholderCover}
          width={248}
          height={512}
          alt='Cover'
          className='block h-72 object-cover transition-all duration-300 group-hover:brightness-[30%]'
        />

        <div className='absolute top-0 left-0 flex h-full w-full -translate-y-2 flex-col items-center justify-center p-2 text-center text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
          <h4 className='text-md mb-2 '>{title}</h4>
          <p className='mb-2 text-sm'>{author}</p>
          <p className='flex flex-wrap items-center justify-center gap-2 text-xs'>
            {tags.slice(0, 5).map((tag: Tag) => (
              <span key={tag.id}>{tag.attributes.name.en}</span>
            ))}
          </p>
        </div>
      </a>
    </Link>
  );
}
