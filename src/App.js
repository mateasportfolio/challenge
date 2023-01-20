import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ImageSlider } from "./components/Slider/ImageSlider";
import { SliderData } from "./components/Slider/SliderData";
import Subscribe from "./components/Subscribe/Subscribe";
import TextC from "./components/TextC/TextC";
import { KonamiCode } from "./components/Konami/KonamiCode";

function App() {
  return (
    <>
      <Header />
      <ImageSlider slides={SliderData} />
      <Subscribe />
      {/* <KonamiCode /> */}
      <TextC />
      <Footer />
    </>
  );
}

export default App;
