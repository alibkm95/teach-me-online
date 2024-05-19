import React from 'react'

import SectionHeader from './SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ArticleCart from './ArticleCart';

import 'swiper/css'
import 'swiper/css/pagination';

import { RiArticleFill } from "react-icons/ri";

const LatestArticles = () => {
  return (
    <section className='w-full max-w-7xl mx-auto py-8 px-2 md:px-6'>
      <SectionHeader title={`Latest Articles`} icon={<RiArticleFill className='text-blue-700' />} showLink={true} linkPath='/articles' />
      <div className="bg-base-200 py-6 rounded-ee-xl rounded-es-xl px-2">
        <span className="loading loading-bars loading-lg block mx-auto"></span>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ArticleCart />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCart />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCart />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCart />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCart />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCart />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCart />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCart />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCart />
          </SwiperSlide>
          <SwiperSlide>
            <ArticleCart />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default LatestArticles