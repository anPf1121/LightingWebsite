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
                        height: "72vh",
                    }}
                >
                    <div
                        className="product-details-data-container"
                        style={{ display: "flex", justifyContent: "space-between" }}
                    >
                        <div
                            className="product-information-container"
                            style={{ display: "block" }}
                        >
                            <img
                                src="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg"
                                alt=""
                                style={{ border: "2px", solid: "#000", width: "25vw" }}
                            />
                            <h4 style={{ maxWidth: "25vw", font: "" }}>
                                We offer a wide range of products in diverse designs and
                                materials in our collections. Our collections are entirely
                                customizable, allowing you to choose from an array of colors,
                                finishes, and sizes, depending on the product or collection.
                                This customization option enables you to create a personalized
                                fixture by mixing and matching different elements. Since our
                                items are all hand-made, variations in size, color, shape, and
                                texture, such as fissures, bubbles, crackling, and crazing in
                                the glass, are inherent in our glass products.
                            </h4>
                        </div>
                        <div
                            className="product-price-container"
                            style={{ display: "block" }}
                        >
                            <h1>Collections</h1>
                            <div className="product-price">$500.00</div>
                            <div
                                className="product-options-input"
                                style={{ boxSizing: "border-box", textAlign: "left" }}
                            >
                                <div
                                    className="input-number"
                                    style={{ position: "relative", display: "inline-block", marginTop: '2em', marginBottom: '2em' }}
                                >
                                    <label htmlFor="">
                                        <div className="number-input-title">Số Lượng</div>
                                        <input
                                            type="number"
                                            pattern="[0-9]*"
                                            aria-label="Số Lượng"
                                            max={999}
                                            min={1}
                                            style={{
                                                paddingLeft: "1em",
                                                paddingRight: "2em",
                                                width: "100%",
                                                height: "2em",
                                                border: "1px solid #c9c9c9",
                                            }}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="btn-options" style={{ display: "flex" }}>
                                <button
                                    className="Add-to-bag"
                                    style={{
                                        marginRight: "1em",
                                        width: "28em",
                                        padding: "1em 2em",
                                        cursor: "pointer"
                                    }}
                                >
                                    <span>Add To Bag</span>
                                </button>
                                <button
                                    className="add-to-favourite-product"
                                    style={{ padding: "1em", cursor: "pointer" }}
                                >
                                    ❤️
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Box>
        </>
    );
}
