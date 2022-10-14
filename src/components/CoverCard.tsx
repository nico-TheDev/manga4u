import Image from 'next/future/image';
import React from 'react';

import cover from '@/assets/img/samplecover.jpg';

export default function CoverCard() {
  return (
    <div className='relative h-72 w-48'>
      <Image src={cover} alt='Cover' className='h-full w-full' />
    </div>
  );
}
