import React from 'react'
// import { Link } from "react-router-dom";
import './globalComponents.css';
import { Card, CardMedia } from '@mui/material';

export default function CollectionCard() {
    return (
        <>
            <Card sx={{
                cursor: 'pointer',
            }} className="crd crd-collection">
                <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" /><CardMedia />
            </Card>
        </>
    )
}