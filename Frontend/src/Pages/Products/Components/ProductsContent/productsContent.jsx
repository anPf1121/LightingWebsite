import { Accordion, AccordionDetails, Box, Button, Divider, Grid, List, ListItem, ListItemText, Pagination, Typography } from "@mui/material";
import React from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import ProductCard from "../../../Components/productCard";
import ProductSlideShow from "../../../Components/productSlideShow";
import StickyBox from "react-sticky-box";
import { useState } from "react";

const theme = createTheme({
    typography: {
        fontFamily: "'Cormorant Garamond', serif", // Thay 'Your-Font-Family' bằng font bạn muốn sử dụng
    },
})


export default function ProductsContent() {
    let [toggleFilter, setToggleFilter] = useState(false);
    const handleToggleFilter = () => setToggleFilter(!toggleFilter);
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
                                top: '-50px',
                                textTransform: 'none'
                            }} onClick={() => handleToggleFilter()}>Bộ lọc</Button>
                            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block'
                                }
                            }}>
                                <StickyBox offsetTop={20} offsetBottom={20}>
                                    <Accordion sx={{ boxShadow: 'none', marginTop: '10px' }} className="product-menu">
                                        <AccordionDetails>
                                            <Typography component='div' variant="h5" sx={{ marginBottom: '25px' }} >Danh Mục Sản Phẩm</Typography>
                                            <div className="menu-item">
                                                Đèn downlight
                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List>
                                            </div>
                                            <div className="menu-item">Đèn ốp trần

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                            <div className="menu-item">Đèn sân vườn

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                            <div className="menu-item">Đèn rọi ray

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                            <div className="menu-item">Đèn panel

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                            <div className="menu-item">Đèn led dây

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                            <div className="menu-item">Đèn bulb

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                            <div className="menu-item">Đèn tuýp

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                            <div className="menu-item">Đèn smart

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                            <div className="menu-item">Đèn gắn tường

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                            <div className="menu-item">Đèn sự cố - emergency

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                            <div className="menu-item">Đèn pha

                                                <List className="menu-dropdown" component="nav" aria-label="mailbox folders">
                                                    <ListItem button>
                                                        <ListItemText primary="Nhỏ" />
                                                    </ListItem>
                                                    <Divider />
                                                    <ListItem button divider>
                                                        <ListItemText primary="Vừa" />
                                                    </ListItem>
                                                    <ListItem button>
                                                        <ListItemText primary="Lớn" />
                                                    </ListItem>
                                                </List></div>
                                        </AccordionDetails>
                                    </Accordion>
                                </StickyBox>
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
