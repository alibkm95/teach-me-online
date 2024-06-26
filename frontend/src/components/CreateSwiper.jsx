import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ProductCart from './ProductCart';

import 'swiper/css'
import 'swiper/css/pagination';

const CreateSwiper = ({ courses }) => {

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={20}
      autoplay={courses.length > 4 ? { delay: 4000, disableOnInteraction: false, } : {}}
      loop={courses.length > 4 ? true : false}
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
        courses.slice(0, 12).map(course => (
          <SwiperSlide key={course._id}>
            <ProductCart course={course} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  )
}

export default CreateSwiper