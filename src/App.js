import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ImageSlider } from "./components/Slider/ImageSlider";
import { SliderData } from "./components/Slider/SliderData";

function App() {
  return (
    <>
      <Header />
      <ImageSlider slides={SliderData} />
      <Footer />
    </>
  );
}

export default App;
