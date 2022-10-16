import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Header from '@/components/Header';
const sample = ['One Piece', 'Blue Lock', 'Cyberpunk:Edgerunners'];

export default function HeaderSlider() {
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
      {sample.map((item) => (
        <SwiperSlide key={item}>
          <Header title={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
