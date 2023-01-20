import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import melodie from "../../assets/melodie.png";

const TextC = () => {
  return (
    <>
      <Flex
        border={"1px solid red"}
        p={200}
        gap="40px"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          flexDirection="row"
          gap="40px"
          alignItems="center"
          justifyContent="center"
          border="2px solid pink"
        >
          {" "}
          Text
        </Box>
        <Box
          flexDirection="row"
          gap="40px"
          alignItems="center"
          justifyContent="center"
          border="2px solid pink"
        >
          {" "}
          Image
        </Box>
        <Box
          flexDirection="row"
          gap="40px"
          alignItems="center"
          justifyContent="center"
          border="2px solid pink"
        >
          {" "}
          Video
        </Box>
      </Flex>
    </>
  );
};

export default TextC;
