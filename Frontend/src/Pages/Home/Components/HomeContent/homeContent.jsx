import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import ProductSlideShow from '../../../Components/productSlideShow'
import ProductCollection from '../productCollection'
import { Link } from 'react-router-dom'

export default function HomeContent() {
    return (
        <>
            <Box className="top-content-title" sx={{ userSelect: 'none' }}>
                <Typography variant='h3' sx={{
                    padding: {
                        xs: "0 5px",
                        sm: "0 15px",
                        md: "0 50px",
                        lg: "0 150px",
                        xl: "0 250px"
                    }, userSelect: 'none', fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem'
                }}>Shop With Us</Typography>
                <Typography variant='h6' sx={{
                    padding: {
                        xs: "0 5px",
                        sm: "0 15px",
                        md: "0 50px",
                        lg: "0 150px",
                        xl: "0 250px"
                    }, userSelect: 'none', color: 'rgba(161, 161, 161)', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem'
                }}>Tam Anh is a prominent partner in designing custom lighting solutions for luxurious homes and interior design studios. We pride ourselves in providing unique creativity, exceptional craftsmanship, and prioritizing our clients' vision and satisfaction in every project we undertake</Typography>
            </Box>
            <ProductSlideShow />
            <Link to='/products' style={{ textDecoration: 'none' }}>
                <Button color='primary' sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '20px 0px',
                    marginLeft: '50%',
                    transform: 'translateX(-50%)',
                    color: 'white',
                    padding: '8px 20px',
                    border: '1px solid black',
                    backgroundColor: 'rgba(50, 50, 50)',
                    borderRadius: '0',
                    '&:hover': {
                        backgroundColor: 'rgba(256, 256, 256)',
                        border: '1px solid black',
                        color: 'black',
                        transition: '.3s',
                    },
                }}>
                    Mua Ngay
                </Button>
            </Link>
            <Box className="top-content-title" sx={{ userSelect: 'none' }}>
                <Typography variant='h3' sx={{
                    padding: {
                        xs: "0 5px",
                        sm: "0 15px",
                        md: "0 50px",
                        lg: "0 150px",
                        xl: "0 250px"
                    }, userSelect: 'none', fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem'
                }}>Explore our collections</Typography>
                <Typography variant='h6' sx={{
                    padding: {
                        xs: "0 5px",
                        sm: "0 15px",
                        md: "0 50px",
                        lg: "0 150px",
                        xl: "0 250px"
                    }, userSelect: 'none', color: 'rgba(161, 161, 161)', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem'
                }}>We've curated a selection of the finest lighting fixtures from renowned designers and manufacturers around the world. Our collection features a range of styles, from sleek and modern to classic and ornate, all crafted from the highest quality materials with exceptional attention to detail.</Typography>
            </Box>
            <ProductCollection />
        </>
    )
}