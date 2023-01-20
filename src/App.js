import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ImageSlider } from "./components/Slider/ImageSlider";
import { SliderData } from "./components/Slider/SliderData";
import Subscribe from "./components/Subscribe/Subscribe";
import TextC from "./components/TextC/TextC";
// import { KonamiCode } from "./components/Konami/KonamiCode";

function App() {
  const isBackgroundRed = true;

  return (
    <>
      <div
        style={{
          backgroundColor: isBackgroundRed ? "red" : "blue",
        }}
      />

      <Header maxW="1200px" />
      <ImageSlider slides={SliderData} maxW="1200px" />
      <Subscribe maxW="1200px" />
      {/* <KonamiCode /> */}
      <TextC maxW="1200px" />
      <Footer />
    </>
  );
}

export default App;
