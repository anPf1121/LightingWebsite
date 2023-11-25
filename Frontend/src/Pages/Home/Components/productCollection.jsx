import React from 'react'
import './../home.css'
import { Box, Card, CardMedia, Grid, Typography } from '@mui/material'
import BtnSeeMore from '../../Components/btnSeeMore'
import * as CollectionServices from "../../../Services/CollectionServices"
import { useQuery } from '@tanstack/react-query'
export default function ProductCollection() {
    const getAllCollection = async () => {
        const res = await CollectionServices.GetAllCollection();
        return res;
    }
    const { isLoading, data } = useQuery({ queryKey: ['collections'], queryFn: getAllCollection })
    const totalCollections = data?.data.length
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
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{
                        padding: {
                            xs: "5px",
                            md: "50px"
                        }
                    }}>
                        {
                            data?.data.slice(0, Math.floor(totalCollections / 2)).map((item, index) => {
                                return <Card sx={{
                                    cursor: 'pointer',
                                    width: '100%',
                                    height: 'auto',
                                    backgroundColor: '#e7e7e7'
                                }} className="crd crd-collection">
                                    <CardMedia alt='unsplash image' component="img" image={item.image} />
                                    <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>{item.name}</Typography>
                                    <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>{item.description}</Typography>
                                    <BtnSeeMore mgLeft={'50%'} transform='translateX(-50%)' />
                                </Card>
                            })
                        }
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{
                        padding: {
                            xs: "5px",
                            md: "50px"
                        }
                    }}>
                        {
                            data?.data.slice(Math.ceil(totalCollections / 2), totalCollections).map((item, index) => {
                                return <Card sx={{
                                    cursor: 'pointer',
                                    backgroundColor: '#e7e7e7'
                                }} className="crd crd-collection">
                                    <CardMedia alt='unsplash image' component="img" image={item.image} sx={{ maxWidth: "1024px", height: "683px" }} />
                                    <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif" }}>{item.name}</Typography>
                                    <Typography sx={{ textAlign: 'center', margin: '10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', color: 'gray' }}>{item.description}</Typography>
                                    <BtnSeeMore mgLeft={'50%'} transform='translateX(-50%)' />
                                </Card>
                            })
                        }
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}