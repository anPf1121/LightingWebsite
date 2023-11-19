import { Accordion, AccordionDetails, Box, Divider, Grid, List, ListItem, ListItemText, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import ProductCard from "../../../Components/productCard";
import ProductSlideShow from "../../../Components/productSlideShow";
import StickyBox from "react-sticky-box";
import MobileProductsFilter from "../mobileProductsFilter";
import * as ProductServices from "../../../../Services/ProductServices"
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const theme = createTheme({
    typography: {
        fontFamily: "'Cormorant Garamond', serif", // Thay 'Your-Font-Family' bằng font bạn muốn sử dụng
    },
})

export default function ProductsContent() {
    const navigate = useNavigate();
    const location = useLocation();
    let { typeId } = useParams();
    if (typeId === undefined) typeId = 0

    const getAllProducts = async () => {
        const res = await ProductServices.GetAllProduct();
        return res;
    }
    const [products, setProducts] = useState(null);
    const { isLoading, data } = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
    const getAllProductType = async () => {
        const res = await ProductServices.getAllProductType();
        return res;
    }

    useEffect(() => {
        if (data?.data?.length > 0) {
            setProducts(data?.data);
        }
    }, [data])

    const { isLoading: isLoadingType, data: typeData } = useQuery({ queryKey: ['product-types'], queryFn: getAllProductType })
    const handleNavLink = (productId) => {
        navigate(`/products/${productId}`);
    }

    const searchQuery = new URLSearchParams(location.search).get('search');
    console.log("searchQuery ", searchQuery);

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
                            <MobileProductsFilter />
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
                                            {typeData?.data.map((item, index) => {
                                                return (
                                                    <div className="menu-item" key={item} onClick={() => handleNavLink(item)}>
                                                        {item}
                                                    </div>
                                                )
                                            })}
                                        </AccordionDetails>
                                    </Accordion>
                                </StickyBox>
                            </Grid>

                            <Grid item xs={12} sm={12} md={8} lg={10} xl={10}>
                                <Grid container sx={{ alignItems: 'center', textAlign: 'center' }}>
                                    {
                                        products?.map((item) => {
                                            if (typeId !== 0 && item.product_type === typeId) {
                                                return <>
                                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                                        <ProductCard saleRate={item.sale_rate} minPrice={item.min_price} maxPrice={item.max_price} key={item._id} productImg={item.image[0]} productName={item.name} index={item._id} />
                                                    </Grid>
                                                </>
                                            } else if (typeId === 0) {
                                                return <>
                                                    <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                                                        <ProductCard saleRate={item.sale_rate} minPrice={item.min_price} maxPrice={item.max_price} key={item._id} productImg={item.image[0]} productName={item.name} index={item._id} />
                                                    </Grid>
                                                </>
                                            }
                                        })
                                    }
                                    <Box sx={{ marginLeft: '50%', transform: 'translateX(-50%)' }}>
                                        <Pagination count={data?.totalPage} page={data?.currentPage} />
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
