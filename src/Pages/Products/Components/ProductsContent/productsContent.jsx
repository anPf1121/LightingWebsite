import { Accordion, AccordionDetails, AccordionSummary, Box, Breadcrumbs, Button, Grid, Pagination, Typography } from "@mui/material";
import React from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import ProductCard from "../../../Components/productCard";
import ProductSlideShow from "../../../Components/productSlideShow";

const theme = createTheme({
    typography: {
        fontFamily: "'Cormorant Garamond', serif", // Thay 'Your-Font-Family' bằng font bạn muốn sử dụng
    },
})

export default function ProductsContent() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Box sx={{ marginTop: '200px' }}>
                    <ProductSlideShow />
                </Box>
                <Box sx={{
                    padding: {
                        xs: "0 5px",
                        sm: "0 15px",
                        md: "0 50px",
                        lg: "0 150px",
                        xl: "0 250px"
                    }
                }}>
                    <Box sx={{ margin: '50px' }}>
                        <Typography variant="h2" sx={{ textAlign: "center" }}>Products</Typography>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed iste ex quae tempora eum quam neque consequuntur consectetur placeat molestiae quidem nesciunt, animi hic illum quia quo provident eveniet culpa.</Typography>
                    </Box>
                    <Box>
                        <Grid container sx={{ textAlign: 'center' }}>
                            <Button sx={{
                                marginLeft: '50%', transform: 'translateX(-50%)', color: 'black', border: '1px solid gray', display: {
                                    xs: 'block',
                                    md: 'none'
                                }
                            }}>filter</Button>
                            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} sx={{
                                backgroundColor: '#fafafa', display: {
                                    xs: 'none',
                                    md: 'block'
                                }
                            }}>
                                <Accordion sx={{ boxShadow: 'none', marginTop: '10px', backgroundColor: '#fafafa' }}>
                                    <AccordionDetails>
                                        <Typography component='div'>Danh Mục Sản Phẩm</Typography>
                                        <div className="">checkbox 1</div>
                                        <div className="">checkbox 2</div>
                                        <div className="">checkbox 3</div>
                                        <div className="">checkbox 4</div>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={10} xl={10}>
                                <Grid container sx={{ alignItems: 'center', textAlign: 'center' }}>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                        <Box sx={{ padding: '10px' }}>
                                            <ProductCard />
                                        </Box>
                                    </Grid>
                                    <Box sx={{ marginLeft: '50%', transform: 'translateX(-50%)' }}>
                                        <Pagination count={10} page={20} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    )
}
