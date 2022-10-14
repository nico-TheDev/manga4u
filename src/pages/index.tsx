import * as React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Header from '@/components/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TitleSlider from '@/components/TitleSlider';

const sample = ['One Piece', 'Blue Lock', 'Cyberpunk:Edgerunners'];

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      {/* HEADER SLIDER */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
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

      {/* SLIDER */}
      <TitleSlider title='Most Popular' />
    </Layout>
  );
}
