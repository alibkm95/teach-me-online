import React, { useEffect } from 'react'

import SectionHeader from './SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ArticleCart from './ArticleCart';
import useGetArticles from '../hooks/useGetArticles';

import 'swiper/css'
import 'swiper/css/pagination';

import { RiArticleFill } from "react-icons/ri";

const LatestArticles = () => {

  const { loading, articles, getArticles } = useGetArticles()

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <section className='w-full max-w-7xl mx-auto py-8 px-2 md:px-6'>
      <SectionHeader title={`Latest Articles`} icon={<RiArticleFill className='text-blue-700' />} showLink={true} linkPath='/articles' />
      <div className="bg-base-200 py-6 rounded-ee-xl rounded-es-xl px-2">
        {
          articles.length === 0 && loading && <span className="loading loading-bars loading-lg block mx-auto"></span>
        }
        {
          articles.length > 0 &&
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            autoplay={articles.length > 4 ? { delay: 4000, disableOnInteraction: false, } : {}}
            loop={articles.length > 4 ? true : false}
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
            {
              articles.slice(0, 12).map(article => (
                <SwiperSlide key={article._id}>
                  <ArticleCart article={article} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        }
        {
          articles.length === 0 && !loading && (
            <div role="alert" className="alert bg-base-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" stroke='orange' strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Loading error!</span>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default LatestArticles