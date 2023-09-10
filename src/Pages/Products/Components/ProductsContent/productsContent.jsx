import { Accordion, AccordionDetails, Autocomplete, Box, Button, Grid, Pagination, TextField, Typography } from "@mui/material";
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
                <Box sx={{
                    padding: {
                        xs: "0 5px",
                        sm: "0 15px",
                        md: "0 50px",
                        lg: "0 150px",
                        xl: "0 250px"
                    }
                }}>
                    <Box sx={{ margin: '150px 0' }}>
                        <Typography variant="h2" sx={{ textAlign: "center" }}>Products</Typography>
                        <Typography variant="h5" sx={{ textAlign: "center" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed iste ex quae tempora eum quam neque consequuntur consectetur placeat molestiae quidem nesciunt, animi hic illum quia quo provident eveniet culpa.</Typography>
                    </Box>
                    <Box>
                        <Grid container sx={{ position: 'relative' }}>
                            <Button sx={{
                                color: 'black', border: '1px solid gray', display: {
                                    xs: 'block',
                                    md: 'none'
                                },
                                position: 'absolute',
                                right: '15px',
                                top: '-50px'
                            }}>filter</Button>
                            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} sx={{
                                marginTop: '9px',
                                backgroundColor: '#f7f7f7', display: {
                                    xs: 'none',
                                    md: 'block'
                                }
                            }}>
                                <Accordion sx={{ boxShadow: 'none', marginTop: '10px', backgroundColor: '#f7f7f7' }} className="product-menu">
                                    <AccordionDetails>
                                        <Typography component='div' variant="h5" sx={{ marginBottom: '25px' }} >Danh Mục Sản Phẩm</Typography>
                                        <div className="menu-item">Đèn downlight</div>
                                        <div className="menu-item">Đèn ốp trần</div>
                                        <div className="menu-item">Đèn sân vườn</div>
                                        <div className="menu-item">Đèn rọi ray</div>
                                        <div className="menu-item">Đèn panel</div>
                                        <div className="menu-item">Đèn led dây</div>
                                        <div className="menu-item">Đèn bulb</div>
                                        <div className="menu-item">Đèn tuýp</div>
                                        <div className="menu-item">Đèn smart</div>
                                        <div className="menu-item">Đèn gắn tường</div>
                                        <div className="menu-item">Đèn sự cố - emergency</div>
                                        <div className="menu-item">Đèn pha</div>
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
                <Box sx={{ margin: '50px 0', backgroundColor: '#f7f7f7', padding: '50px 0' }}>
                    <Box sx={{
                        padding: {
                            xs: "0 5px",
                            sm: "0 15px",
                            md: "0 50px",
                            lg: "0 150px",
                            xl: "0 250px"
                        },
                    }}>
                        <Typography variant="h4" sx={{
                            marginLeft: '5px',
                        }}>Sản Phẩm Bán Chạy</Typography>
                    </Box>
                    <ProductSlideShow />
                </Box>
            </ThemeProvider >
        </>
    )
}
