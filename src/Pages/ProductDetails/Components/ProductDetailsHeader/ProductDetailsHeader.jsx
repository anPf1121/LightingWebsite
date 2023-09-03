import React from "react";
import StickyNav from "./../../../Components/stickyNav";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function ProductDetailsHeader() {
  return (
    <>
      <StickyNav />
      <Box
        sx={{
          width: "50vw",
          height: "80vh",
          bgcolor: "cyan",
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
            backgroundColor: "red",
            display: "block",
            width: "50vw",
            height: "72vh",
          }}
        >
          <div className="product-details-data-container">
            <div className="product-information-container"></div>
            <div className="product-price-container"></div>
          </div>
        </div>
      </Box>
    </>
  );
}
