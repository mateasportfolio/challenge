import React from "react";
import { useState } from "react";
import { SliderData } from "./SliderData";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

export const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.lenght;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <ArrowLeftIcon className="left-arrow" onClick={prevSlide} />
      <ArrowRightIcon className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="cover"
                className="image"
                maxW="1200px"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
