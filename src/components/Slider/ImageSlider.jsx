import React from "react";
import { useState } from "react";
import { SliderData } from "./SliderData";
// import { Box } from "@chakra-ui/react";

export const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  // const lenght = slides.lenght;
  return (
    // <Box
    //   border={"1px solid red"}
    //   display="inline-block"
    //   lineHeight="1em"
    //   flexShrink={0}
    //   w="150vh"
    //   h="100vh"
    // >
    //   Image
    // </Box>
    <>
      {SliderData.map((slide, index) => {
        return <img src={slide.image} alt="cover" />;
      })}
    </>
  );
};

export default ImageSlider;
