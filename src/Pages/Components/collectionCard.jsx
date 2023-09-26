import React from 'react'
// import { Link } from "react-router-dom";
import './globalComponents.css';
import { Card, CardMedia, Typography } from '@mui/material';
import BtnSeeMore from './btnSeeMore';

export default function CollectionCard() {
    return (
        <>
            <Card sx={{
                cursor: 'pointer',
            }} className="crd crd-collection">
                <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" />
                <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description</Typography>
                <BtnSeeMore style={{mgLeft: '50%', transform: 'translateX(-50%)'}}/>
            </Card>
        </>
    )
}