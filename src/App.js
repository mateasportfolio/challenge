import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ImageSlider } from "./components/Slider/ImageSlider";

function App() {
  return (
    <>
      <Header />
      <ImageSlider />
      <Footer />
    </>
  );
}

export default App;
