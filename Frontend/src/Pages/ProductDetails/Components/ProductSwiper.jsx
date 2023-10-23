import { Box } from "@mui/material";
import React from "react";
import ImageGallery from 'react-image-gallery';

export default function SimpleSlider(props) {
  const images = [];
  props?.image?.forEach(element => {
    images.push({ original: element, thumbnail: element})
  });
  return (
    <>
      <ImageGallery items={images} infinite={true} showFullscreenButton={false} showPlayButton={false} slideDuration={4} useBrowserFullscreen={false} showNav={true} thumbnailPosition={'left'} disableThumbnailSwipe={false} originalHeight={'300vh'} />;
    </>
  );
}
