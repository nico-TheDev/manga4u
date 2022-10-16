import Image from 'next/future/image';
import { useRouter } from 'next/router';
import React from 'react';

import Button from '@/components/buttons/Button';

import cover from '@/assets/img/samplecover.jpg';

export default function SummaryCard() {
  const router = useRouter();

  const handleClick = () => router.push('/manga/1');

  return (
    <div className=' flex  gap-5 bg-secondary-dark pr-4 text-white '>
      <Image src={cover} alt='cover' className='w-28' />

      <div className='p-4'>
        <h6 className='mb-2 text-lg font-bold'>One Piece</h6>
        <p className='text-md mb-8'>Chapter 1063</p>
        <Button
          variant='primary'
          className='text-md hover:translate-y-0'
          onClick={handleClick}
        >
          Start Reading
        </Button>
      </div>

      <span className='ml-auto inline-block self-start p-4'>4 hrs ago</span>
    </div>
  );
}
