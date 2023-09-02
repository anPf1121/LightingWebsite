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
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';



export default function ProductSlideShow() {
    return (
        <>
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
                    <Card sx={{ cursor: 'pointer', border: '1px solid #f3f3f3' }} className="crd">
                        <CardContent className='crd-content'>
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_429,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg" />
                            <CardContent className='crd-content-inner'>
                                <Typography className='crd-content-typo'>
                                    Xem thêm
                                </Typography>
                            </CardContent>
                        </CardContent>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component="div"
                                sx={{
                                    textAlign: "center",
                                }}
                            >Product Name</Typography>
                        </CardContent>
                    </Card>
                </Box></SwiperSlide>
                <SwiperSlide><Box>
                    <Card sx={{ cursor: 'pointer', border: '1px solid #f3f3f3' }} className="crd">
                        <CardContent className='crd-content'>
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_de943b529f3b400f8ea1730980364cb3~mv2.webp" />
                            <CardContent className='crd-content-inner'>
                                <Typography className='crd-content-typo'>
                                    Xem thêm
                                </Typography>
                            </CardContent>
                        </CardContent>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component="div"
                                sx={{
                                    textAlign: "center",
                                }}
                            >Product Name</Typography>
                        </CardContent>
                    </Card>
                </Box></SwiperSlide>
                <SwiperSlide><Box>
                    <Card sx={{ cursor: 'pointer', border: '1px solid #f3f3f3' }} className="crd">
                        <CardContent className='crd-content'>
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" />
                            <CardContent className='crd-content-inner'>
                                <Typography className='crd-content-typo'>
                                    Xem thêm
                                </Typography>
                            </CardContent>
                        </CardContent>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component="div"
                                sx={{
                                    textAlign: "center",
                                }}
                            >Product Name</Typography>
                        </CardContent>
                    </Card>
                </Box></SwiperSlide>
                <SwiperSlide><Box>
                    <Card sx={{ cursor: 'pointer', border: '1px solid #f3f3f3' }} className="crd">
                        <CardContent className='crd-content'>
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_453e3482b0a844b59c9f6661423114d8~mv2.jpg/v1/fill/w_429,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_453e3482b0a844b59c9f6661423114d8~mv2.jpg" />
                            <CardContent className='crd-content-inner'>
                                <Typography className='crd-content-typo'>
                                    Xem thêm
                                </Typography>
                            </CardContent>
                        </CardContent>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component="div"
                                sx={{
                                    textAlign: "center",
                                }}
                            >Product Name</Typography>
                        </CardContent>
                    </Card>
                </Box></SwiperSlide>
                <SwiperSlide><Box>
                    <Card sx={{ cursor: 'pointer', border: '1px solid #f3f3f3' }} className="crd">
                        <CardContent className='crd-content'>
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_72838f018f69449a926c02f4e4a9b323~mv2.webp" />
                            <CardContent className='crd-content-inner'>
                                <Typography className='crd-content-typo'>Xem Nhanh</Typography>
                            </CardContent>
                        </CardContent>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component="div"
                                sx={{
                                    textAlign: "center",
                                }}
                            >Product Name</Typography>
                        </CardContent>
                    </Card>
                </Box></SwiperSlide>
            </Swiper>
        </>
    )
}