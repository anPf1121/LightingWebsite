import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Grid,
  Toolbar,
  IconButton,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ProductSwiper from "./../ProductSwiper";
import ProductSlideShow from "../../../Components/productSlideShow";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import * as ProductServices from "../../../../Services/ProductServices"
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../../Redux/Slides/orderSlide';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import QuantityInput from "../../../Components/quantityInput";


export default function ProductDetailsContent() {
  const dispatch = useDispatch();
  const { productId } = useParams();

  const GetProductDetails = async (id) => {
    const res = await ProductServices.GetProductDetails(id);
    return res;
  }
  const { isLoading: isLoadingDetails, data: dataDetails } = useQuery({ queryKey: ['product-details', productId], queryFn: () => GetProductDetails(productId) })

  const GetAllProduct = async () => {
    const res = await ProductServices.GetAllProduct();
    return res;
  }
  const { data: dataAllProduct } = useQuery({ queryKey: ['products'], queryFn: GetAllProduct })
  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 1) {
      setQuantity(newValue);
    }
  };

  const label = { inputProps: { "aria-label": "Checkbox" } };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com", "_blank");
  };

  let powerSet = new Set();
  dataDetails?.data.map((item) => {
    powerSet.add(item.power.powerValue)
  })
  powerSet = [...powerSet]

  let sizeSet = new Set();

  dataDetails?.data.map((item) => {
    sizeSet.add(item.size.sizeName)
  })

  sizeSet = [...sizeSet]

  let colorSet = new Set();

  dataDetails?.data.map((item) => {
    colorSet.add(item.color.colorName)
  })

  colorSet = [...colorSet]

  const referenceProduct = dataDetails?.data[0].product

  const similarProducts = dataAllProduct?.data.filter(product => product?.product_type === referenceProduct?.product_type).slice(0, 5);
  const [productDetail, setProductDetail] = useState(dataDetails?.data[0]);

  const [alignment, setAlignment] = React.useState(null);

  const handleChangeModel = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const matchProductDetails = (id) => {
    let newProduct = {};
    dataDetails?.data.forEach(element => {
      if (element._id === id) {
        newProduct = element
      }
    });
    setProductDetail(newProduct);
  }
  const handleAddOrderProduct = () => {
    dispatch(addProduct({
      orderItem: {
        quantity: quantity,
        productDetails: alignment,
        itemName: productDetail?.product.name + " " + productDetail?.power.powerValue + " " + productDetail?.size.sizeName + " " + productDetail?.color.colorName,
        main_image: productDetail?.product.image[0],
        product_type: productDetail?.product?.product_type.typeName,
        unit_price: productDetail?.unit_price
      },
    }));
  }
  const handleBuyNow = () => {
    handleAddOrderProduct();
  }

  useEffect(() => {
    if (isLoadingDetails === false) {
      setAlignment(dataDetails?.data[0]._id);
      setProductDetail(dataDetails?.data[0])
    }
  }, [isLoadingDetails]);
 
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: '100px', padding: "5px" }}>
        <Grid item xs={12} sm={12} md={6} >
          <Box>
            <ProductSwiper image={productDetail?.product.image} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box p={2}>
            <div className="product-inf-container">
              <div className="name">
                <Typography
                  variant="h2"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "2.5em",
                  }}
                >
                  {productDetail?.product.name}
                </Typography>
              </div>

              <div className="price" >
                {
                  (productDetail?.unit_price !== productDetail?.sale_price)
                    ? <span style={{ display: 'flex', gap: '20px', margin: "20px 0" }}>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={{
                          userSelect: "none",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.5em",
                          textDecoration: 'line-through',
                          alignItems: 'center'
                        }}
                      >
                        {(productDetail?.unit_price) + "đ"}
                      </Typography>
                      <Typography
                        variant="h2"
                        component="div"
                        sx={{
                          userSelect: "none",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "2.2em",
                          display: 'flex',
                          alignItems: 'center',
                          gap: '20px'
                        }}
                      >
                        {" " + (productDetail?.sale_price) + "đ"}
                      </Typography>
                    </span>
                    : <Typography
                      variant="h3"
                      component="div"
                      sx={{
                        userSelect: "none",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.5em",
                        textDecoration: 'line-through',
                        alignItems: 'center'
                      }}
                    >
                      {(productDetail?.unit_price) + "đ"}
                    </Typography>
                }
              </div>
              <Box sx={{ background: "#f9f9f9", borderRadius: "8px", padding: "15px 15px", maxWidth: "550px" }}>
                <div className="model">
                  <span
                    style={{
                      userSelect: "none",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.5em',
                    }}
                  >
                    Model
                  </span>
                  <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChangeModel}
                    aria-label="Platform"
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    {
                      dataDetails?.data.map((item, id) => {
                        return <ToggleButton sx={{ background: "none", border: "none", borderRadius: '5px !important', margin: "10px 0" }} onClick={() => matchProductDetails(item._id)} value={item._id} key={id}>{item.power.powerValue == "" ? "" : item.power.powerValue} {item.color.colorName == "" ? "" : item.color.colorName} {(item.size.sizeName == "" ? "" : item.size.sizeName)}</ToggleButton>
                      })
                    }
                  </ToggleButtonGroup>
                </div>
                <span
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5em',
                    marginTop: "15px",
                    marginBottom: '8px'
                  }}
                >
                  Số Lượng
                </span>
                <QuantityInput quantity={quantity} handleInputChange={handleInputChange} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
                <div className="btn-options" style={{ display: "flex" }}>
                  <Button
                    className="Add-to-bag"
                    color="primary"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "1em",
                      color: "black",
                      backgroundColor: "buttonface",
                      "&:hover": {
                        backgroundColor: "rgb(215 215 215)",
                        color: "black",
                        transition: ".3s",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "2em",
                          height: "2em",
                        }}
                        onClick={handleAddOrderProduct}
                      >
                        <AddShoppingCartIcon />
                      </div>
                    </Box>
                  </Button>
                  <Button
                    className="buy-now"
                    color="primary"
                    onClick={handleBuyNow}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginRight: "1em",
                      color: "black",
                      backgroundColor: "buttonface",
                      "&:hover": {
                        backgroundColor: "rgb(215 215 215)",
                        color: "black",
                        transition: ".3s",
                      },
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", textTransform: 'none' }}>
                      <Typography variant="h6"><Link style={{ color: 'black', textDecoration: 'none' }} to='/payment'>Mua Ngay</Link></Typography>
                    </Box>
                  </Button>
                  <button
                    className="add-to-favourite-product"
                    style={{
                      width: "4em",
                      cursor: "pointer",
                      border: 'none'
                    }}
                  >
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite style={{ color: 'red' }} />}
                    />
                  </button>
                </div>
              </Box>
            </div>
            <div>
              <Toolbar style={{ padding: "0px" }}>
                <Typography variant="h6" component="div"></Typography>
                <IconButton color="inherit" onClick={handleFacebookClick}>
                  <FacebookIcon sx={{ color: "#385898" }} />
                </IconButton>
                <IconButton color="inherit" onClick={handleInstagramClick}>
                  <InstagramIcon />
                </IconButton>
              </Toolbar>
            </div>
          </Box>
          <Box p={2}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons={false}
                  aria-label="basic tabs example"
                >
                  <Tab
                    label="Mô tả sản phẩm"
                    sx={{
                      fontSize: "1.1em",
                      color: "#000 !important",
                    }}
                    {...a11yProps(0)}
                  />
                  <Tab
                    label="Thông số kỹ thuật"
                    sx={{
                      fontSize: "1.1em",
                      color: "#000 !important",
                    }}
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Typography
                  component="span"
                  variant="h3"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1em",
                    width: "100%",
                  }}
                >
                  {productDetail?.product.description}
                </Typography>
                <br />
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Typography
                  component="span"
                  variant="h3"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1em",
                  }}
                >
                  Voltage: {productDetail?.voltage}
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="h3"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1em",
                  }}
                >
                  Power: {productDetail?.power.powerValue}
                </Typography>
                <Typography
                  component="span"
                  variant="h3"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1em",
                  }}
                >
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="h3"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1em",
                  }}
                >
                  Luminous Flux: {productDetail?.luminous_flux}
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="h3"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1em",
                  }}
                >
                  Lumens Color Temperature: {productDetail?.lumens_color_temperature}
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="h3"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1em",
                  }}
                >
                  Color Rendering Index (CRI): {productDetail?.CRI}
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="h3"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1em",
                  }}
                >
                  Dimensions: {productDetail?.dimension}
                </Typography>
                <br />
                <Typography
                  component="span"
                  variant="h3"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.1em",
                  }}
                >
                  Warranty: {productDetail?.warranty}
                </Typography>
                <br />
              </CustomTabPanel>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1} lg={2} md={2}></Grid>
      </Grid >
      <Box
        sx={{ margin: "50px 0", marginBottom: '0', backgroundColor: "#f7f7f7", padding: "50px 0" }}
      >
        <Box
          sx={{
            padding: {
              xs: "0 5px",
              sm: "0 15px",
              md: "0 50px",
              lg: "0 150px",
              xl: "0 250px",
            },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              marginLeft: "5px",
            }}
          >
            Sản Phẩm Cùng Loại
          </Typography>
          <div className="btn-see-more">Xem Thêm</div>
        </Box>
        <ProductSlideShow products={similarProducts} />
      </Box>
    </>
  );
}
