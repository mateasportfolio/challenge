import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { Box } from "@chakra-ui/react";

export const Slider = () => {
  const images = [
    "https://lp2.sme-static.com/eisbrecher/dist/img/EB_LMM_Cover_3000x3000.jpg",
    "https://lp2.sme-static.com/eisbrecher/dist/img/EB_Single_FAKK_3000x3000.jpg",
  ];
  return (
    <Box w={500} h={300} alignItems="center" justifyContent="center">
      <Slide>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[0]})` }}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ backgroundImage: `url(${images[1]})` }}>
            <span>Slide 2</span>
          </div>
        </div>
      </Slide>
    </Box>
  );
};
