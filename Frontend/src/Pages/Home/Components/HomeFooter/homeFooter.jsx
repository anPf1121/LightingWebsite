import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import GlobalFooter from './../../../Components/footer'

export default function HomeFooter() {
    return (
        <>
            <Box sx={{
                padding: {
                    xs: '10px',
                    md: '50px'
                },
                backgroundColor: 'rgba(50, 50, 50)',
                marginBottom: '50px'
            }}>
                <Box sx={{
                    width: '100%',
                    backgroundColor: 'white'
                }}>
                    <Grid container sx={{alignItems: 'center', textAlign: 'center'}}>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                            <Box p={2} sx={{ backgroundColor: 'white', padding: '20px' }}>
                                <Typography variant='h3' sx={{ fontSize: '3rem', fontFamily: "'Cormorant Garamond', serif" }}>
                                    About Us
                                </Typography>
                                <Typography variant='h5' sx={{ fontSize: '1.5rem', fontFamily: "'Cormorant Garamond', serif" }}>
                                    With two decades of experience, we are the top company specializing in the production and design of lighting solutions for real estate. Our success in the industry is attributed to our ability to understand and fulfill our customers' expectations and aspirations. By collaborating with partners from around the world, we provide our customers with top-quality materials and the greatest benefits of use.
                                </Typography>
                                <Typography variant='h3' sx={{ fontSize: '3rem', fontFamily: "'Cormorant Garamond', serif" }}>
                                    Location
                                </Typography>
                                <Typography variant='h5' sx={{ fontSize: '1.5rem', fontFamily: "'Cormorant Garamond', serif" }}>
                                    20 Lieu Giai, Hanoi, Vietnam
                                </Typography>
                                <Button color='primary' sx={{
                                    alignItems: 'center',
                                    margin: '20px 0px',
                                    color: 'white',
                                    padding: '8px 15px',
                                    border: '1px solid black',
                                    backgroundColor: 'rgba(50, 50, 50)',
                                    borderRadius: '0',
                                    '&:hover': {
                                        backgroundColor: 'rgba(256, 256, 256)',
                                        border: '1px solid black',
                                        color: 'black',
                                        transition: '.3s',
                                    },
                                }}>Về Chúng Tôi</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ maxWidth: '100%', height: 'auto', overflow: 'hidden', objectFit: 'cover' }}>
                            <Box sx={{ maxWidth: '100%', height: '100%' }}>
                                <img className="footer-img" src='https://static.wixstatic.com/media/5b4b7e_a3fc1e94fe694859858278948c6969bf~mv2.jpg/v1/fill/w_583,h_685,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5b4b7e_a3fc1e94fe694859858278948c6969bf~mv2.jpg' alt='cutest kitten' />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <GlobalFooter style={{
                backgroundColor: '#e7e7e7',
            }} />
        </>
    )
}