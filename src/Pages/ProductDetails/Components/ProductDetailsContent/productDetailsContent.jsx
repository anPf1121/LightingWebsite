import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  CardContent,
  Button,
  Typography,
  TextField,
  Input,
} from "@mui/material";
export default function ProductDetailsContent() {
  return (
    <>
      <CardContent>
        <div>
          <Box
            sx={{
              width: "50vw",
              display: "block",
              marginLeft: "50%",
              marginTop: "15vh",
              transform: "translateX(-50%)",
            }}
            className="produc-content-container"
          >
            <nav
              className="Navigation"
              style={{
                marginBottom: "6vh",
                marginTop: "10vh",
                display: "flex",
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  flexShrink: 1,
                  flexBasis: 0,
                }}
                className="btn-home"
              >
                <Link to="/">Trang Chủ </Link>/<span> Collections</span>
              </div>
              <div className="btn-navigation">
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    marginLeft: "1vw",
                    marginRight: "1vw",
                    cursor: "pointer",
                  }}
                >
                  Trước
                </button>
                |
                <button
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    marginLeft: "1vw",
                    marginRight: "1vw",
                    cursor: "pointer",
                  }}
                >
                  Tiếp
                </button>
              </div>
            </nav>
            <div
              style={{
                display: "block",
                width: "50vw",
              }}
            >
              <div
                className="product-details-data-container"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div
                  className="product-information-container"
                  style={{ display: "block", marginRight: "2em" }}
                >
                  <img
                    src="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg"
                    alt=""
                    style={{ border: "2px", solid: "#000", width: "25vw" }}
                  />
                  <Typography
                    variant="h4"
                    sx={{
                      userSelect: "none",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.1em",
                    }}
                  >
                    We offer a wide range of products in diverse designs and
                    materials in our collections. Our collections are entirely
                    customizable, allowing you to choose from an array of
                    colors, finishes, and sizes, depending on the product or
                    collection. This customization option enables you to create
                    a personalized fixture by mixing and matching different
                    elements. Since our items are all hand-made, variations in
                    size, color, shape, and texture, such as fissures, bubbles,
                    crackling, and crazing in the glass, are inherent in our
                    glass products.
                  </Typography>
                </div>
                <div
                  className="product-price-container"
                  style={{ display: "block", width: "25vw" }}
                >
                  <Typography
                    variant="h1"
                    sx={{
                      userSelect: "none",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "2em",
                    }}
                  >
                    Collections
                  </Typography>
                  <div className="product-price" style={{ marginTop: "0.5em" }}>
                    <Typography
                      variant="h4"
                      sx={{
                        userSelect: "none",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.5em",
                      }}
                    >
                      $500.00
                    </Typography>
                  </div>

                  <div
                    className="product-options-input"
                    style={{ boxSizing: "border-box", textAlign: "left" }}
                  >
                    <div
                      className="input-number"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        marginTop: "1.5em",
                        marginBottom: "2em",
                      }}
                    >
                      <div className="number-input-title">
                        <Typography
                      variant="h4"
                      sx={{
                        userSelect: "none",
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.2em",
                      }}
                    >
                      Quantity
                    </Typography>
                        </div>
                      <div>
                        {/* <TextField
                          lable="Quantity"
                          variant="outlined"
                          type="number"
                          style={{
                            height: "10 px",
                            maxWidth: "7em",
                            marginBottom: "2em",
                            marginTop: "0.5em",
                          }}
                        ></TextField> */}
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
                        color: "white",
                        width: "20em",
                        height: "3.5em",
                        border: "1px solid black",
                        backgroundColor: "rgb(0,0,0)",
                        "&:hover": {
                          backgroundColor: "rgba(0,0,0,0.7)",
                          border: "1px solid black",
                          color: "white",
                          transition: ".3s",
                        },
                      }}
                    >
                      <span>Add To Bag</span>
                    </Button>
                    <button
                      className="add-to-favourite-product"
                      style={{
                        paddingRight: "1em",
                        paddingLeft: "1em",
                        cursor: "pointer",
                      }}
                    >
                      ❤️
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </div>
      </CardContent>
    </>
  );
}
