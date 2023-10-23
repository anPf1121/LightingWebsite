import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Grid,
  Toolbar,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
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
export default function ProductDetailsContent() {
  const { productId } = useParams();

  const GetProduct = async (id) => {
    const res = await ProductServices.GetProduct(id);
    return res;
  }
  const { isLoading: isLoadingProduct, data: dataProduct } = useQuery({ queryKey: ['product'], queryFn: () => dataDetails?.data[0].product ? GetProduct(dataDetails?.data[0].product) : null })

  const GetProductDetails = async (id) => {
    const res = await ProductServices.GetProductDetails(id);
    return res;
  }
  const { isLoading: isLoadingDetails, data: dataDetails } = useQuery({ queryKey: ['product-details', productId], queryFn: () => GetProductDetails(productId) })
  
  const GetAllProduct = async (id) => {
    const res = await ProductServices.GetAllProduct();
    return res;
  }
  const { data: dataAllProduct } = useQuery({ queryKey: ['products', productId], queryFn: GetAllProduct })


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
    // Xử lý khi người dùng nhấn nút Facebook
    window.open("https://www.facebook.com", "_blank");
  };

  const handleInstagramClick = () => {
    // Xử lý khi người dùng nhấn nút Instagram
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


  const referenceProduct = dataProduct?.data
  const similarProducts = dataAllProduct?.data.filter(product => product?.product_type === referenceProduct?.product_type).slice(0, 5);
  console.log("similarProducts1", similarProducts);
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ marginTop: '100px' }}>
        <Grid item xs={12} sm={12} md={6} >
          <Box sx={{ marginLeft: '20px' }}>
            <ProductSwiper image={dataProduct?.data.image} />
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
                    fontSize: "2em",
                  }}
                >
                  {dataProduct?.data.name}
                </Typography>
              </div>
              <div className="price">
                <Typography
                  variant="h4"
                  sx={{
                    userSelect: "none",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5em",
                    width: "100%",
                  }}
                >
                  500 - 1000 $
                </Typography>
              </div>
              <Box sx={{ margin: '20px 0' }}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="product_type"
                  // value={productState.product_type}
                  // onChange={handleRadioChange}
                  style={{ display: "flex", alignItems: 'center' }}
                >
                  <div style={{ marginRight: '20px' }}>
                    Công xuất:
                  </div>
                  {
                    powerSet.map((item, index) => {
                      if (item) {
                        return <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
                      }
                    })
                  }
                </RadioGroup>

                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="product_type"
                  // value={productState.product_type}
                  // onChange={handleRadioChange}
                  style={{ display: "flex", alignItems: 'center' }}
                >
                  <div style={{ marginRight: '20px' }}>
                    Ánh sáng:
                  </div>
                  {
                    colorSet.map((item, index) => {
                      if (item) {
                        return <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
                      }
                    })
                  }
                </RadioGroup>

                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="product_type"
                  // value={productState.product_type}
                  // onChange={handleRadioChange}
                  style={{ display: "flex", alignItems: 'center' }}
                >
                  <div style={{ marginRight: '20px' }}>
                    Kích cỡ:
                  </div>
                  {
                    sizeSet.map((item, index) => {
                      if (item) {
                        return <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
                      }
                    })
                  }
                </RadioGroup>

              </Box>

              <div className="product-options-input">
                <div className="quantity">
                  <div
                    className="input-quantity"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      marginTop: "1em",
                      marginBottom: "2em",
                    }}
                  >
                    <div className="number-input-title"></div>
                    <label htmlFor="Quantity">
                      <Typography
                        variant="h4"
                        sx={{
                          userSelect: "none",
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.2em",
                          display: "block",
                        }}
                      >
                        Số Lượng
                      </Typography>
                      <div
                        style={{
                          display: "inline-block",
                          position: "relative",
                          width: "6em",
                        }}
                      >
                        <input
                          type="number"
                          id="Quantity"
                          value={quantity}
                          onChange={handleInputChange}
                          min={1}
                          max={100}
                          readOnly
                          style={{
                            height: "3em",
                            width: "100%",
                            paddingLeft: "1em",
                            paddingRight: "2em",
                            border: "1px solid #5757",
                            borderRadius: "3px",
                            cursor: "default",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "10%",
                            right: "1.6em",
                            width: "1.5em",
                            height: "2em",
                            backgroundColor: "#ffff",
                            display: "block",
                            cursor: "default",
                          }}
                        ></div>
                        <Box
                          className="quantity-input-spinner-arrows-container"
                          sx={{
                            position: "absolute",
                            top: "10%",
                            right: "0.5em",
                            opacity: "0",
                            "&:hover": {
                              opacity: "1",
                            },
                          }}
                        >
                          <span
                            onClick={handleIncrease}
                            style={{
                              backgroundImage:
                                "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+RGVza3RvcCAxOTIwIC8gMTA4MDwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtMTkyMC0vLTEwODAiIHN0cm9rZT0iIzEyMTIxMiI+ICAgICAgICAgICAgPGcgaWQ9InF0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDUuMDAwMDAwKSI+ICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUmVjdGFuZ2xlLTMtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wMDAwMDAsIDUuMDAwMDAwKSByb3RhdGUoLTIyNS4wMDAwMDApIHRyYW5zbGF0ZSgtNS4wMDAwMDAsIC01LjAwMDAwMCkgIiBwb2ludHM9IjggOCAyIDggMiAyIj48L3BvbHlsaW5lPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==)",
                              width: "1em",
                              height: "1em",
                              display: "block",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          ></span>
                          <span
                            onClick={handleDecrease}
                            style={{
                              backgroundImage:
                                "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+RGVza3RvcCAxOTIwIC8gMTA4MDwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtMTkyMC0vLTEwODAiIHN0cm9rZT0iIzEyMTIxMiI+ICAgICAgICAgICAgPGcgaWQ9InF0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDYuMDAwMDAwKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtOC4wMDAwMDAsIC02LjAwMDAwMCkgdHJhbnNsYXRlKDMuMDAwMDAwLCAxLjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlJlY3RhbmdsZS0zLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA1LjAwMDAwMCkgcm90YXRlKC0yMjUuMDAwMDAwKSB0cmFuc2xhdGUoLTUuMDAwMDAwLCAtNS4wMDAwMDApICIgcG9pbnRzPSI4IDggMiA4IDIgMiI+PC9wb2x5bGluZT4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=)",
                              width: "1em",
                              height: "1em",
                              display: "block",
                              cursor: "pointer",
                              userSelect: "none",
                            }}
                          ></span>
                        </Box>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
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
                    backgroundColor: "white",
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
                    >
                      <AddShoppingCartIcon />
                    </div>
                  </Box>
                </Button>
                <Button
                  className="buy-now"
                  color="primary"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "1em",
                    color: "black",
                    backgroundColor: "white",
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
                  {dataProduct?.data.description}
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
                  Voltage: {dataDetails?.data[0]?.voltage}
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
                  Power: {dataDetails?.data[0]?.power.powerValue}
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
                  Luminous Flux: {dataDetails?.data[0]?.luminous_flux}
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
                  Lumens Color Temperature: {dataDetails?.data[0]?.lumens_color_temperature}
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
                  Color Rendering Index (CRI): {dataDetails?.data[0]?.CRI}
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
                  Dimensions: {dataDetails?.data[0]?.dimension}
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
                  Warranty: {dataDetails?.data[0]?.warranty}
                </Typography>
                <br />
              </CustomTabPanel>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1} lg={2} md={2}></Grid>
      </Grid>
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
        <ProductSlideShow products={similarProducts}/>
      </Box>
    </>
  );
}
