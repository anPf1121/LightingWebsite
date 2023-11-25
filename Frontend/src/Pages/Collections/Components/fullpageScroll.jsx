import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import BtnSeeMore from '../../Components/btnSeeMore'
import * as CollectionServices from "../../../Services/CollectionServices"
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
export default function FullpageScroll() {
    const navigate = useNavigate();
    const getAllCollection = async () => {
        const res = await CollectionServices.GetAllCollection();
        return res;
    }
    const { isLoading, data } = useQuery({ queryKey: ['collections'], queryFn: getAllCollection })
    const handleNavLink = (collectionId) => {
        navigate(`/products/${collectionId}`);
    }
    console.log("data ", data);
    return (
        <>
            <div className="container">
                {
                    data?.data.map((item, index) => {
                        if (index % 2 === 0) {
                            return <section className='fp'>
                                <Grid container sx={{
                                    padding: {
                                        xs: "5px",
                                        md: "20px"
                                    },
                                    alignItems: 'center'
                                }}>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ borderRadius: '20px', objectFit: 'cover', overflow: 'hidden', maxHeight: "50vh" }} >
                                        <img style={{ width: '100%', height: '100%', }} src={item.image} alt="none" />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{}}>
                                        <Box sx={{
                                            padding: {
                                                xs: "5px",
                                                md: "50px"
                                            },
                                            alignItems: 'center'
                                        }}>
                                            <Typography variant='h3' sx={{ textAlign: 'center' }}>{item.name}</Typography>
                                            <Typography sx={{ margin: '20px 0' }} variant='h6'>{item.description}</Typography>
                                            <BtnSeeMore onClick={() => handleNavLink(item._id)} style={{ mgLeft: '0', transform: 'none' }} />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </section>
                        } else {
                            return  <section className='fp'>
                            <Grid container sx={{
                                padding: '20px',
                                alignItems: 'center'
                            }}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{}}>
                                    <Box sx={{
                                        padding: {
                                            xs: "5px",
                                            md: "50px"
                                        },
                                        alignItems: 'center'
                                    }}>
                                        <Typography variant='h3' sx={{ textAlign: 'center' }}>{item.name}</Typography>
                                        <Typography sx={{ margin: '20px 0' }} variant='h6'>{item.description}</Typography>
                                        <BtnSeeMore onClick={() => handleNavLink(item._id)} style={{ mgLeft: '0', transform: 'none' }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ borderRadius: '20px', objectFit: 'cover', overflow: 'hidden', maxHeight: "50vh" }} >
                                    <img style={{ width: '100%', height: '100%', }} src={item.image} alt="none" />
                                </Grid>
                            </Grid>
                        </section>
                        }
                    })
                }
            </div>
        </>
    )
}
