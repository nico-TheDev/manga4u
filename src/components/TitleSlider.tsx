import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import CoverCard from '@/components/CoverCard';

type Props = {
  title: string;
};

const sample = [
  'Hello',
  'World',
  'Hello',
  'World',
  'Hello',
  'World',
  'Hello',
  'World',
];

export default function TitleSlider({ title }: Props) {
  return (
    <div className='mx-auto my-14 w-[90%]'>
      <h2 className='mb-8 text-white'>{title}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={5}
        navigation
        loop={true}
      >
        {sample.map((item) => (
          <SwiperSlide key={item}>
            <CoverCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
