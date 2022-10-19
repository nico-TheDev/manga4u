import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import CoverCard from '@/components/CoverCard';

import { MangaData } from '@/types/data-types/manga';

type Props = {
  title: string;
  mangaList: MangaData[];
};

export default function TitleSlider({ title, mangaList }: Props) {
  return (
    <div className='mx-auto my-14 w-[90%]'>
      <h2 className='mb-8 text-white'>{title}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={5}
        navigation
        loop={false}
      >
        {mangaList.map((manga) => (
          <SwiperSlide key={manga.id}>
            <CoverCard
              mangaId={manga.id}
              title={manga.attributes.title.en}
              author='No Author'
              relationships={manga.relationships}
              tags={manga.attributes.tags}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
