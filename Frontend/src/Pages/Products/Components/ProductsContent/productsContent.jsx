import { Accordion, AccordionDetails, Box, Divider, Grid, List, ListItem, ListItemText, Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import ProductCard from "../../../Components/productCard";
import ProductSlideShow from "../../../Components/productSlideShow";
import StickyBox from "react-sticky-box";
import * as ProductServices from "../../../../Services/ProductServices"
import { useQuery } from "@tanstack/react-query";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TuneIcon from '@mui/icons-material/Tune';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Overlay from "../../../Components/overlay";
import { Collapse, ListItemButton, ListItemIcon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';
const theme = createTheme({
    typography: {
        fontFamily: "'Cormorant Garamond', serif", // Thay 'Your-Font-Family' bằng font bạn muốn sử dụng
    },
})

export default function ProductsContent() {
    const navigate = useNavigate();
    const location = useLocation();
    let { collectionId, typeId } = useParams();
    if (typeId === undefined) typeId = 0
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search');
    const typeQuery = queryParams.get('filter_type');

    const [products, setProducts] = useState(null);

    const getAllProducts = async () => {
        const res = await ProductServices.GetAllProduct(searchQuery, collectionId, typeQuery);
        return res;
    }

    const { isLoading, data } = useQuery(['products', searchQuery, collectionId, typeQuery], getAllProducts, {
        enabled: !!typeQuery || !!collectionId || !!searchQuery,
        onSuccess: (responseData) => {
            if (responseData) {
                setProducts(responseData.data); 
            }
        },
    });

    const getAllProductType = async () => {
        const res = await ProductServices.getAllProductType();
        return res;
    }

    const { isLoading: isLoadingType, data: typeData } = useQuery({ queryKey: ['product-types'], queryFn: getAllProductType })

    const handleNavLink = (typeId) => {
        let queryString = `/products/${collectionId}`;
        if (typeId) {
            queryString += `?filter_type=${typeId}`
        }
        navigate(queryString);
    }

    const [isOpenSort, setOpenSort] = useState(false)
    const [isOpenFilter, setOpenFilter] = useState(false)
    const handleToggleSort = () => {
        setOpenSort(!isOpenSort)
    }
    const [filterS, setFilterS] = useState(12);
    const [filterL, setFilterL] = useState(12);
    const [itemRowDisplay, setItemRowDisplay] = useState(3);
    const handleToggleFilter = () => {
        setOpenFilter(!isOpenFilter)
        if (filterS !== 3) {
            setFilterS(3)
        } else {
            setFilterS(12)
        }
        if (filterL !== 9) {
            setFilterL(9)
        } else {
            setFilterL(12)
        }
        if (itemRowDisplay === 4) {
            setItemRowDisplay(3)
        } else {
            setItemRowDisplay(4)
        }
    }

    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Box sx={{ margin: '60px 0', position: 'fixed', zIndex: '0', top: '0px', left: "50%", transform: "translate(-50%)" }}>
                <img style={{ width: '100vw', height: 'auto', zIndex: '0' }} src="https://c4.wallpaperflare.com/wallpaper/942/461/270/lamp-modern-light-bulb-wallpaper-preview.jpg" alt="" />
                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white" }}>
                    <Typography variant="h4">Sản phẩm</Typography>
                    <Typography variant="h4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, accusantium. Beatae, reiciendis! Quia nostrum quod obcaecati odit veniam quae pariatur, nemo ex accusantium atque impedit mollitia quos adipisci debitis velit!</Typography>
                </Box>
            </Box>
            <ThemeProvider theme={theme}>
                <Box sx={{
                    marginTop: {
                        xs: "300px",
                        sm: "550px",
                        md: "600px",
                        lg: "800px",
                    },
                    background: "#e7e7e7",
                    position: "relative",
                    zIndex: "80"
                }}>

                    <Box sx={{
                        padding: {
                            xs: "0 5px",
                            sm: "0 15px",
                            md: "0 50px",
                            lg: "0 150px",
                            xl: "0 250px"
                        },
                    }}>

                        <Box sx={{ display: "flex", justifyContent: "space-between", padding: "50px 0" }}>
                            <div className="l"></div>
                            <div className="r" style={{ display: 'flex', gap: '30px' }}>
                                <button onClick={handleToggleFilter} style={{ border: "none", backgroundColor: "unset", fontSize: "1.5em", cursor: "pointer", display: 'flex', gap: '5px', alignItems: 'center' }}>Bộ lọc <TuneIcon /></button>
                                <div className="dropdown" style={{ position: 'relative' }}>
                                    <button onClick={handleToggleSort} style={{ border: "none", backgroundColor: "unset", fontSize: "1.5em", cursor: "pointer", display: 'flex', gap: '5px', alignItems: 'center' }}>
                                        <div>Sắp xếp</div>
                                        <div style={isOpenSort === false ? { rotate: "0deg" } : { rotate: "180deg" }}>
                                            <KeyboardArrowDownIcon />
                                        </div>
                                    </button>
                                    <Box position="absolute" style={isOpenSort === true ? { display: "block" } : { display: 'none' }} sx={{ top: "40px", zIndex: "100", borderRadius: "5px", background: "white", width: "133px", fontSize: "1.2em" }}>
                                        <div style={{ padding: '5px 15px', cursor: "pointer" }}>Giá tiền thấp</div>
                                        <div style={{ padding: '5px 15px', cursor: "pointer" }}>Giá tiền cao</div>
                                        <div style={{ padding: '5px 15px', cursor: "pointer" }}>Đánh giá</div>
                                    </Box>
                                </div>
                                {
                                    isOpenSort === true
                                        ?
                                        <Overlay func={handleToggleSort} />
                                        : ""
                                }
                            </div>
                        </Box>
                        <Box sx={{
                            display: {
                                xs: 'block',
                                md: 'none'
                            }
                        }}>
                            {(open === true && isOpenFilter === true) ? <Overlay func={handleToggleFilter} /> : ""}
                            <Box className={`filter-sidebar ${(isOpenFilter === true) ? 'filter-active' : ''}`}>
                                <div className="btn-close" onClick={handleToggleFilter}><CloseIcon /></div>
                                <div className="filter-by-lighting-type">
                                    <ListItemButton onClick={handleClick}>
                                        <ListItemIcon>
                                            Danh mục sản phẩm
                                        </ListItemIcon>
                                        <ListItemText primary="" />
                                        {open ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                    <StarBorder />
                                                </ListItemIcon>
                                                <ListItemText primary="Đèn downlight" />
                                            </ListItemButton>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemIcon>
                                                    <StarBorder />
                                                </ListItemIcon>
                                                <ListItemText primary="Đèn ốp trần" />
                                            </ListItemButton>
                                        </List>
                                    </Collapse>
                                </div>
                            </Box>
                        </Box>
                        <Box>
                            <Grid container sx={{ position: 'relative', }}>
                                {
                                    isOpenFilter === true ?
                                        <Grid item xs={12} sm={12} md={filterS} lg={filterS} xl={filterS} sx={{
                                            display: {
                                                xs: 'none',
                                                md: 'block'
                                            }
                                        }}>
                                            <StickyBox offsetTop={80} offsetBottom={20}>
                                                <Accordion sx={{ boxShadow: 'none', marginTop: '10px' }} className="product-menu">
                                                    <AccordionDetails>
                                                        <Typography component='div' variant="h5" sx={{ marginBottom: '25px' }} >Danh Mục Sản Phẩm</Typography>
                                                        {typeData?.data.map((item, index) => {
                                                            return (
                                                                <div className="menu-item" key={item._id} onClick={() => handleNavLink(item._id)}>
                                                                    {item.typeName}
                                                                </div>
                                                            )
                                                        })}
                                                        <Typography component='div' variant="h5" sx={{ marginBottom: '25px' }} >Công xuất</Typography>
                                                        <Typography component='div' variant="h5" sx={{ marginBottom: '25px' }} >Giá tiền</Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </StickyBox>
                                        </Grid>
                                        : ""
                                }

                                <Grid item xs={12} sm={12} md={filterL} lg={filterL} xl={filterL}>
                                    <Grid container sx={{ alignItems: 'center', textAlign: 'center' }}>
                                        {
                                            products?.map((item) => {
                                                if (typeId !== 0 && item.product_type === typeId) {
                                                    return <>
                                                        <Grid item xs={12} sm={6} md={itemRowDisplay} lg={itemRowDisplay} xl={3}>
                                                            <ProductCard saleRate={item.sale_rate} minPrice={item.min_price} maxPrice={item.max_price} key={item._id} productImg={item.image[0]} productName={item.name} index={item._id} />
                                                        </Grid>
                                                    </>
                                                } else if (typeId === 0) {
                                                    return <>
                                                        <Grid item xs={12} sm={6} md={itemRowDisplay} lg={itemRowDisplay} xl={3}>
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
                    <Box sx={{ margin: '0px 0', backgroundColor: '#f7f7f7', padding: '50px 0' }}>
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
                </Box>
            </ThemeProvider >
        </>
    )
}
