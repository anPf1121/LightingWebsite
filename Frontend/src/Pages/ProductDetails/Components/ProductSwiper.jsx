import { Box } from "@mui/material";
import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';
import "./productDetails.css"
export default function SimpleSlider(props) {
  const images = [];
  props?.image?.forEach(element => {
    images.push({ original: element, thumbnail: element })
  });
  return (
    <>
      <div className="image-gallery-container">
        <ImageGallery items={images} infinite={true} showFullscreenButton={false} showPlayButton={false} slideDuration={4} useBrowserFullscreen={false} showNav={true} thumbnailPosition={'left'} disableThumbnailSwipe={false} originalHeight={'300vh'} />
      </div>
    </>
  );
}
