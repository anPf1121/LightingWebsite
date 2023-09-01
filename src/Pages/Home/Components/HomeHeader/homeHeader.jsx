import React from 'react'
import StickyNav from './../../../Components/stickyNav'
import { Typography } from '@mui/material'
export default function HomeHeader() {
    return (
        <>
            <StickyNav/>
            <div className="header-img">
                <div className="header-img-title">
                    <Typography variant='h1'>
                        This Is Main Title
                    </Typography>
                    <Typography variant='h5'>
                        This Is Sub Title
                    </Typography>
                </div>
                <img src="https://www.sensio.co.uk/images/kitchen-home-page-slider-2017.jpg" alt="" />
            </div>
        </>
    )
}