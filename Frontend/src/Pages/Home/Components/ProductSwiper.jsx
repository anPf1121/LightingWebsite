import { Box } from "@mui/material";
import React, { useState } from "react";
import ImageGallery from 'react-image-gallery';
import "../home.css"
export default function SimpleSlider(props) {
  const images = [];
  props?.image?.forEach(element => {
    images.push({ original: element, thumbnail: element })
  });
  return (
    <>
      <div className="image-gallery-container-h">
        <ImageGallery items={images} autoPlay={true} slideDuration={1200}  showBullets={true} showThumbnails={false} infinite={true} showFullscreenButton={true} showPlayButton={false} showNav={true} />
      </div>
    </>
  );
}
