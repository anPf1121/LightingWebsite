import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function ProductSlideShow() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>dsad</SwiperSlide>
                <SwiperSlide>sdsd</SwiperSlide>
                <SwiperSlide>dsadas</SwiperSlide>
                <SwiperSlide>ssssssssss</SwiperSlide>
            </Swiper>
        </>
    )
}