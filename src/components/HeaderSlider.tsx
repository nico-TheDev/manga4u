import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Header from '@/components/Header';

import { MangaSummary } from '@/types/data-types/manga';

type Props = {
  mangaList: MangaSummary[];
};

export default function HeaderSlider({ mangaList }: Props) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
    >
      {mangaList &&
        mangaList.map((manga: MangaSummary) => (
          <SwiperSlide key={manga.mangaId}>
            <Header manga={manga} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
