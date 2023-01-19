import React from "react";
import "./App.css";
import Landingpage from "./pages/Landingpage";

import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Flex flexDirection="column"></Flex>
        <Landingpage />
      </div>
    </>
  );
}

export default App;
