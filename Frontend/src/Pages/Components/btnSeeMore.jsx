import React from 'react'
// import { Link } from "react-router-dom";
import './globalComponents.css';
import { Button } from '@mui/material';

export default function BtnSeeMore({mgLeft, transform}) {
    return (
        <>
            <Button color='primary' sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '5px 0px',
                marginBottom: '50px',
                marginLeft: `${mgLeft}`,
                transform: `${transform}`,
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
            }}>Xem Thêm</Button>
        </>
    )
}