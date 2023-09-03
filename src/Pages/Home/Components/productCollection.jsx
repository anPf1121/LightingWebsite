import React from 'react'
import './../home.css'
import { Box, Grid, Typography } from '@mui/material'
import CollectionCard from '../../Components/collectionCard'
import BtnSeeMore from '../../Components/btnSeeMore'
export default function ProductCollection() {
    return (
        <>
            <Box>
                <Grid container sx={{ padding: '10px' }}>
                    {/* 1 group */}
                    <Box className="collection-row" sx={{
                        display: {
                            xs: 'block',
                            md: 'flex'
                        }, alignItems: 'center'
                    }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <CollectionCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <Box>
                                <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                                <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                                <BtnSeeMore />
                            </Box>
                        </Grid>
                    </Box>

                    <Box className="collection-row" sx={{
                        display: {
                            xs: 'block',
                            md: 'flex'
                        }, alignItems: 'center'
                    }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto', display: { xs: "none", md: "block" } }}>
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                            <BtnSeeMore />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <CollectionCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto', display: { xs: "block", md: "none" } }}>
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                            <BtnSeeMore />
                        </Grid>
                    </Box>
                    {/* end 1 group */}
                    {/* 1 group */}
                    <Box className="collection-row" sx={{
                        display: {
                            xs: 'block',
                            md: 'flex'
                        }, alignItems: 'center'
                    }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <CollectionCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <Box>
                                <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                                <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                                <BtnSeeMore />
                            </Box>
                        </Grid>
                    </Box>

                    <Box className="collection-row" sx={{
                        display: {
                            xs: 'block',
                            md: 'flex'
                        }, alignItems: 'center'
                    }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto', display: { xs: "none", md: "block" } }}>
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                            <BtnSeeMore />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <CollectionCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto', display: { xs: "block", md: "none" } }}>
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                            <BtnSeeMore />
                        </Grid>
                    </Box>
                    {/* end 1 group */}
                    {/* 1 group */}
                    <Box className="collection-row" sx={{
                        display: {
                            xs: 'block',
                            md: 'flex'
                        }, alignItems: 'center'
                    }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <CollectionCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <Box>
                                <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                                <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                                <BtnSeeMore />
                            </Box>
                        </Grid>
                    </Box>

                    <Box className="collection-row" sx={{
                        display: {
                            xs: 'block',
                            md: 'flex'
                        }, alignItems: 'center'
                    }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto', display: { xs: "none", md: "block" } }}>
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                            <BtnSeeMore />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <CollectionCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto', display: { xs: "block", md: "none" } }}>
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                            <BtnSeeMore />
                        </Grid>
                    </Box>
                    {/* end 1 group */}
                    {/* 1 group */}
                    <Box className="collection-row" sx={{
                        display: {
                            xs: 'block',
                            md: 'flex'
                        }, alignItems: 'center'
                    }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <CollectionCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <Box>
                                <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                                <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                                <BtnSeeMore />
                            </Box>
                        </Grid>
                    </Box>

                    <Box className="collection-row" sx={{
                        display: {
                            xs: 'block',
                            md: 'flex'
                        }, alignItems: 'center'
                    }}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto', display: { xs: "none", md: "block" } }}>
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                            <BtnSeeMore />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto' }}>
                            <CollectionCard />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ width: '100%', height: 'auto', display: { xs: "block", md: "none" } }}>
                            <Typography variant='h4' sx={{ textAlign: 'center', margin: '10px 0' }}>Collection Name</Typography>
                            <Typography sx={{ textAlign: 'center', margin: '10px 0' }}>Collection description, lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nulla voluptas ipsum libero. Repellat inventore, iure ipsum dolores, odit expedita ad commodi qui quia, voluptatum reprehenderit itaque modi quo. Dolore.</Typography>
                            <BtnSeeMore />
                        </Grid>
                    </Box>
                    {/* end 1 group */}

                </Grid>
            </Box>
        </>
    )
}