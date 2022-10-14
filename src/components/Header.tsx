import Image from 'next/future/image';
import React from 'react';

import Button from '@/components/buttons/Button';
import Pill from '@/components/Pill';

import sample from '@/assets/img/sample.png';

const sampleGenre = ['Action', 'Shounen', 'Romance'];

type Props = {
  title: string;
};

export default function Header({ title }: Props) {
  return (
    <header className='relative flex h-[60vh] items-center py-4'>
      <Image
        src={sample}
        className='absolute top-0 left-0 h-full w-full object-cover brightness-[30%]'
        height={400}
        alt='Title'
      />
      <div className='relative mx-auto w-[90%] text-white'>
        <h2 className='mb-4'>{title}</h2>
        {/* GENRE LIST */}
        <ul className='mb-4 flex items-center gap-2'>
          {sampleGenre.map((genre) => (
            <li key={genre}>
              <Pill genre={genre} />
            </li>
          ))}
        </ul>

        <p className='mb-8 max-w-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          velit voluptate, eligendi neque sed a sint odit labore corporis
          perferendis!
        </p>

        <Button variant='primary' className='text-sm uppercase'>
          Read More
        </Button>
      </div>
    </header>
  );
}
