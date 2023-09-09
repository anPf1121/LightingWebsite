import React from 'react'
import './../home.css'
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
import BtnSeeMore from '../../Components/btnSeeMore'

export default function ProductCollection() {
    return (
        <>
            <Box>
                <Grid container sx={{
                    padding: {
                        xs: "0 5px",
                        sm: "0 15px",
                        md: "0 50px",
                        lg: "0 150px",
                        xl: "0 250px"
                    }
                }}>
                    {/* 1 group */}
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{
                        padding: {
                            xs: "5px",
                            md: "50px"
                        }
                    }}>
                        <Card sx={{
                            cursor: 'pointer',
                            width: '100%',
                            height: 'auto'
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_d3b5a9141daf4f1dade9c5038dfd695b~mv2.webp" />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_0251678cf7bd4ca4a9ae2a10e32837c0~mv2.jpg/v1/fill/w_529,h_798,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5b4b7e_0251678cf7bd4ca4a9ae2a10e32837c0~mv2.jpg" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_47176d6ca148424bb8ca370c1d6f21a6~mv2.webp" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_841c8c440afc4f7a8e744b75245b3070~mv2.webp" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                            width: '100%',
                            height: 'auto'
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_0d8d25cd685047bf92e165f135c75ce0~mv2.webp" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_c00ddd98b00041df8389fb23d479c1c9~mv2.jpg/v1/fill/w_510,h_724,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5b4b7e_c00ddd98b00041df8389fb23d479c1c9~mv2.jpg" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_7e01a0c7963a4de4abe3d4cd43b49e23~mv2.webp" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_a77a7bfbdc4640f090edf4f1d7fb32d1~mv2.webp" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{
                        padding: {
                            xs: "5px",
                            md: "50px"
                        }
                    }}>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_029f59eea2b940e1aba47e52e50485e8~mv2.webp" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_9f58df25b6d2407695109e134c3f1116~mv2.webp" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_1c7a5e1239d54d848ab4a369316120af~mv2.jpg/v1/crop/x_0,y_53,w_998,h_1297/fill/w_545,h_705,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5b4b7e_1c7a5e1239d54d848ab4a369316120af~mv2.jpg" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_1fc0e4c306e94774a8064514a3c34f04~mv2.jpg/v1/fill/w_544,h_716,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5b4b7e_1fc0e4c306e94774a8064514a3c34f04~mv2.jpg" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_99d0ff39da474cfd87e38fcc8f9d4f88~mv2.jpg/v1/fill/w_547,h_311,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_99d0ff39da474cfd87e38fcc8f9d4f88~mv2.jpg" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_781c30bb4baa484bb7832569f8ed23cf~mv2.jpg/v1/fill/w_540,h_304,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_781c30bb4baa484bb7832569f8ed23cf~mv2.jpg" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_3aab24f74f854b5ebec099e14432ac03~mv2.webp" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                        <Card sx={{
                            cursor: 'pointer',
                        }} className="crd crd-collection">
                            <CardMedia alt='unsplash image' component="img" image="https://static.wixstatic.com/media/5b4b7e_c4c55a0a0384459e9c9e191eac007fab~mv2.jpg/v1/fill/w_542,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5b4b7e_c4c55a0a0384459e9c9e191eac007fab~mv2.jpg" sx={{ maxWidth: "1024px", height: "683px" }} />
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>Collection description</Typography>
                            <BtnSeeMore />
                        </Card>
                    </Grid>
                    {/* end 1 group */}

                </Grid>
            </Box>
        </>
    )
}