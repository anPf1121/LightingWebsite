import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';
import CardSlideShow from './cardSlideShow';



export default function ProductSlideShow() {
    return (
        <>
            <Box sx={{
                padding: {
                    xs: "0 5px",
                    sm: "0 15px",
                    md: "0 50px",
                    lg: "0 150px",
                    xl: "0 250px"
                }
            }}>
                <Swiper
                    slidesPerView={3}
                    breakpoints={{ 1536: { slidesPerView: 4, }, 900: { slidesPerView: 3, }, 600: { slidesPerView: 3, }, 0: { slidesPerView: 1, } }}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{ type: 'fraction', }}
                    initialSlide={2}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="swiper-container">
                    <SwiperSlide><Box>
                        <CardSlideShow />
                    </Box></SwiperSlide>
                    <SwiperSlide><Box>
                        <CardSlideShow />
                    </Box></SwiperSlide>
                    <SwiperSlide><Box>
                        <CardSlideShow />
                    </Box></SwiperSlide>
                    <SwiperSlide><Box>
                        <CardSlideShow />
                    </Box></SwiperSlide>
                    <SwiperSlide><Box>
                        <CardSlideShow />
                    </Box></SwiperSlide>
                </Swiper >
            </Box>
        </>
    )
}