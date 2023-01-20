import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ImageSlider } from "./components/Slider/ImageSlider";
import { SliderData } from "./components/Slider/SliderData";
import Subscribe from "./components/Subscribe/Subscribe";
import TextC from "./components/TextC/TextC";
import Konami from "./components/Konami/Konami.jsx";

function App() {
  return (
    <>
      <Header />
      <ImageSlider slides={SliderData} />
      <Konami />
      <Subscribe />
      <TextC />
      <Footer />
    </>
  );
}

export default App;
