import React, { useState } from "react";
import Slider from "react-slick";
import "./productDetails.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

export default function SimpleSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  var settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };
  var settings2 = {
    // infinite: true,
    speed: 500,
    slidesToShow: 6,
    centerMode: true,
    focusOnSelect: true,
    accessibility: true,
    centerPadding: "-12px",
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          centerPadding: "-8px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: "-10px",
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          centerPadding: "-2px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          centerPadding: "40px",
        },
      },
    ],
    arrows: true,
  };
  return (
    <>
      <Slider
        {...settings}
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        style={{ width: "100%" }}
      >
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: {
              xs: "360px",
              md: "480px",
              lg: "667px",
            },
          }}
        >
          <img
            src="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg"
            alt=""
            className="slick-image slick-image1"
            style={{
              width: "100%",
              height: {
                xs: "360px",
                md: "480px",
                lg: "667px",
              },
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: {
              xs: "360px",
              md: "480px",
              lg: "667px",
            },
          }}
        >
          <img
            src="https://static.wixstatic.com/media/5b4b7e_5f9fd2ed52aa475bb088c3d18ad835d6~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_5f9fd2ed52aa475bb088c3d18ad835d6~mv2.jpg"
            alt=""
            className="slick-image slick-image1"
            style={{
              width: "100%",
              height: {
                xs: "360px",
                md: "480px",
                lg: "667px",
              },
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: {
              xs: "360px",
              md: "480px",
              lg: "667px",
            },
          }}
        >
          <img
            src="https://static.wixstatic.com/media/5b4b7e_04a50798183e46389b71c5b00ea3cbbe~mv2.webp"
            alt=""
            className="slick-image slick-image1"
            style={{
              width: "100%",
              height: {
                xs: "360px",
                md: "480px",
                lg: "667px",
              },
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: {
              xs: "360px",
              md: "480px",
              lg: "667px",
            },
          }}
        >
          <img
            src="https://static.wixstatic.com/media/5b4b7e_409da3bc7593440bb7121b8ba299cd20~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_409da3bc7593440bb7121b8ba299cd20~mv2.jpg"
            alt=""
            className="slick-image slick-image1"
            style={{
              width: "100%",
              height: {
                xs: "360px",
                md: "480px",
                lg: "667px",
              },
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: {
              xs: "360px",
              md: "480px",
              lg: "667px",
            },
          }}
        >
          <img
            src="https://static.wixstatic.com/media/5b4b7e_1c9d0f2c20ba4977a13979f7cfbe9e3c~mv2.webp"
            alt=""
            className="slick-image slick-image1"
            style={{
              width: "100%",
              height: {
                xs: "360px",
                md: "480px",
                lg: "667px",
              },
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: {
              xs: "360px",
              md: "480px",
              lg: "667px",
            },
          }}
        >
          <img
            src="https://static.wixstatic.com/media/5b4b7e_611353cffbd84c529866170416a678ff~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_611353cffbd84c529866170416a678ff~mv2.jpg"
            alt=""
            className="slick-image slick-image1"
            style={{
              width: "100%",
              height: {
                xs: "360px",
                md: "480px",
                lg: "667px",
              },
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: {
              xs: "360px",
              md: "480px",
              lg: "667px",
            },
          }}
        >
          <img
            src="https://static.wixstatic.com/media/5b4b7e_b42effc489ca49b5b0446b1575cce12e~mv2.webp"
            alt=""
            className="slick-image slick-image1"
            style={{
              width: "100%",
              height: {
                xs: "360px",
                md: "480px",
                lg: "667px",
              },
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
        </div>
      </Slider>
      <Box sx={{ padding: "25px" }}>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          {...settings2}
        >
          <div>
            <h3
              style={{
                maxWidth: "63px",
                height: "63px",
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            >
              <img
                src="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg"
                alt=""
                className="slick-image slick-image2"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </h3>
          </div>
          <div>
            <h3
              style={{
                maxWidth: "63px",
                height: "63px",
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            >
              <img
                src="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg"
                alt=""
                className="slick-image slick-image2"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </h3>
          </div>
          <div>
            <h3
              style={{
                maxWidth: "63px",
                height: "63px",
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            >
              <img
                src="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg"
                alt=""
                className="slick-image slick-image2"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </h3>
          </div>
          <div>
            <h3
              style={{
                maxWidth: "63px",
                height: "63px",
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            >
              <img
                src="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg"
                alt=""
                className="slick-image slick-image2"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </h3>
          </div>
          <div>
            <h3
              style={{
                maxWidth: "63px",
                height: "63px",
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            >
              <img
                src="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg"
                alt=""
                className="slick-image slick-image2"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </h3>
          </div>
          <div>
            <h3
              style={{
                maxWidth: "63px",
                height: "63px",
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            >
              <img
                src="https://static.wixstatic.com/media/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg/v1/fill/w_500,h_667,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/5b4b7e_ddb3c954e30d417f8bbc945e87896aca~mv2.jpg"
                alt=""
                className="slick-image slick-image2"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </h3>
          </div>
          <div>
            <h3
              style={{ maxWidth: "63px", height: "63px", objectFit: "cover" }}
            >
              <img
                src="https://static.wixstatic.com/media/5b4b7e_b42effc489ca49b5b0446b1575cce12e~mv2.webp"
                alt=""
                className="slick-image slick-image2"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </h3>
          </div>
        </Slider>
      </Box>
    </>
  );
}
