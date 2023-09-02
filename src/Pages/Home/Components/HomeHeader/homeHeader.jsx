import React from 'react'
import StickyNav from './../../../Components/stickyNav'
import { Typography } from '@mui/material'
export default function HomeHeader() {
    return (
        <>
            <StickyNav />
            <div className="header-img">
                <div className="header-img-title">
                    <Typography sx={{
                        fontSize: {
                            sm: '2.5rem',
                            md: '3rem',
                            lg: '3.5rem',
                            xl: '6rem',
                        }, fontFamily: "'Cormorant Garamond', serif",
                        textAlign: 'center'
                    }}>
                        Tam Anh
                    </Typography>
                    <Typography sx={{
                        fontSize: {
                            sm: '1rem',
                            md: '1.5rem',
                            lg: '2rem',
                            xl: '2.5rem',
                        }, fontFamily: "'Cormorant Garamond', serif",
                        textAlign: 'center'
                    }}>
                        Modern Design & Living
                    </Typography>
                </div>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20201111/pngtree-grey-abstract-watercolor-paint-background-image_468924.jpg" alt="description of image" />
            </div>
        </>
    )
}