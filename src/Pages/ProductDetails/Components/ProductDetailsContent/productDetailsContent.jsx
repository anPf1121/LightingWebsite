import React from "react";
import { Link } from "react-router-dom";
import { Box, CardContent, Button, Typography } from "@mui/material";
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
                      width: "25vw",
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
                      className="input-quantity"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        marginTop: "1.5em",
                        marginBottom: "2em",
                        WebkitAppearance: "none",
                        MozAppearance: "textfield",
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
                          Quantity
                        </Typography>
                        <div
                          style={{
                            display: "inline-block",
                            position: "relative",
                            width: "6em",
                            textAlign: "left",
                          }}
                        >
                          <input
                            type="number"
                            id="Quantity"
                            min={1}
                            max={100}
                            style={{
                              height: "3em",
                              width: "100%",
                              paddingLeft: "1em",
                              paddingRight: "2em",
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
                              cursor: "text"
                            }}
                          ></div>
                          <Box
                            className="quantity-input-spinner-arrows-container"
                            sx={{
                              position: "absolute",
                              top: "10%",
                              right: "0.5em",
                              opacity: "0",
                              '&:hover': {
                                opacity: '1',
                              },
                            }}
                          >
                            <span
                              style={{
                                backgroundImage:
                                  "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+RGVza3RvcCAxOTIwIC8gMTA4MDwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtMTkyMC0vLTEwODAiIHN0cm9rZT0iIzEyMTIxMiI+ICAgICAgICAgICAgPGcgaWQ9InF0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMy4wMDAwMDAsIDUuMDAwMDAwKSI+ICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUmVjdGFuZ2xlLTMtQ29weSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wMDAwMDAsIDUuMDAwMDAwKSByb3RhdGUoLTIyNS4wMDAwMDApIHRyYW5zbGF0ZSgtNS4wMDAwMDAsIC01LjAwMDAwMCkgIiBwb2ludHM9IjggOCAyIDggMiAyIj48L3BvbHlsaW5lPiAgICAgICAgICAgIDwvZz4gICAgICAgIDwvZz4gICAgPC9nPjwvc3ZnPg==)",
                                width: "1em",
                                height: "1em",
                                display: "block",
                                cursor: "pointer",
                              }}
                            ></span>
                            <span
                              style={{
                                backgroundImage:
                                  "url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+RGVza3RvcCAxOTIwIC8gMTA4MDwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9IkRlc2t0b3AtMTkyMC0vLTEwODAiIHN0cm9rZT0iIzEyMTIxMiI+ICAgICAgICAgICAgPGcgaWQ9InF0eSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC4wMDAwMDAsIDYuMDAwMDAwKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtOC4wMDAwMDAsIC02LjAwMDAwMCkgdHJhbnNsYXRlKDMuMDAwMDAwLCAxLjAwMDAwMCkiPiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlJlY3RhbmdsZS0zLUNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA1LjAwMDAwMCkgcm90YXRlKC0yMjUuMDAwMDAwKSB0cmFuc2xhdGUoLTUuMDAwMDAwLCAtNS4wMDAwMDApICIgcG9pbnRzPSI4IDggMiA4IDIgMiI+PC9wb2x5bGluZT4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=)",
                                width: "1em",
                                height: "1em",
                                display: "block",
                                cursor: "pointer",
                              }}
                            ></span>
                          </Box>
                        </div>
                      </label>
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
