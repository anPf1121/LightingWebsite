import React from 'react'
import './../home.css'
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
export default function ProductCollection() {
    return (
        <>
            <Box sx={{
                width: '80%',
                margin: '50px 10%',
            }}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card sx={{ cursor: 'pointer', marginBottom: '20px' }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component="div"
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >Collection Name</Typography>
                            </CardContent>
                        </Card>
                        <Button color='primary' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '5px 0px',
                            marginBottom: '50px',
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
                        }}>Xem Thêm</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ maxWidth: '100%', height: 'auto' }}>
                        <Card sx={{ cursor: 'pointer', marginBottom: '20px' }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component="div"
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >Collection Name</Typography>
                            </CardContent>
                        </Card>
                        <Button color='primary' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '5px 0px',
                            marginBottom: '50px',
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
                        }}>Xem Thêm</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card sx={{ cursor: 'pointer', marginBottom: '20px' }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component="div"
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >Collection Name</Typography>
                            </CardContent>
                        </Card>
                        <Button color='primary' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '5px 0px',
                            marginBottom: '50px',
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
                        }}>Xem Thêm</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ maxWidth: '100%', height: 'auto' }}>
                        <Card sx={{ cursor: 'pointer', marginBottom: '20px' }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component="div"
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >Collection Name</Typography>
                            </CardContent>
                        </Card>
                        <Button color='primary' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '5px 0px',
                            marginBottom: '50px',
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
                        }}>Xem Thêm</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card sx={{ cursor: 'pointer', marginBottom: '20px' }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component="div"
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >Collection Name</Typography>
                            </CardContent>
                        </Card>
                        <Button color='primary' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '5px 0px',
                            marginBottom: '50px',
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
                        }}>Xem Thêm</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ maxWidth: '100%', height: 'auto' }}>
                        <Card sx={{ cursor: 'pointer', marginBottom: '20px' }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component="div"
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >Collection Name</Typography>
                            </CardContent>
                        </Card>
                        <Button color='primary' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '5px 0px',
                            marginBottom: '50px',
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
                        }}>Xem Thêm</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Card sx={{ cursor: 'pointer', marginBottom: '20px' }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component="div"
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >Collection Name</Typography>
                            </CardContent>
                        </Card>
                        <Button color='primary' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '5px 0px',
                            marginBottom: '50px',
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
                        }}>Xem Thêm</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ maxWidth: '100%', height: 'auto' }}>
                        <Card sx={{ cursor: 'pointer', marginBottom: '20px' }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_16fbc48187634d308f1d5572efd2b4cd~mv2.webp" />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component="div"
                                    sx={{
                                        textAlign: "center",
                                    }}
                                >Collection Name</Typography>
                            </CardContent>
                        </Card>
                        <Button color='primary' sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: '5px 0px',
                            marginBottom: '50px',
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
                        }}>Xem Thêm</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}