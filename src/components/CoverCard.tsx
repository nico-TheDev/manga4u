import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';

import cover from '@/assets/img/samplecover.jpg';

export default function CoverCard() {
  return (
    <Link href=''>
      <a className='group relative h-72 w-48 overflow-hidden'>
        <Image
          src={cover}
          alt='Cover'
          className='h-full w-full transition-all duration-300 group-hover:brightness-[30%]'
        />

        <div className='absolute top-0 left-0 flex h-full w-full -translate-y-2 flex-col items-center justify-center text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100'>
          <h4 className='text-md mb-2'>One Piece</h4>
          <p className='mb-2 text-sm'>Eichiro Oda</p>
          <p className='flex items-center gap-2 text-xs'>
            <span>Pirate</span>
            <span>Shounen</span>
            <span>Jump</span>
          </p>
        </div>
      </a>
    </Link>
  );
}
