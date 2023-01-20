import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import melodie from "../../assets/melodie.png";

const TextC = () => {
  return (
    <>
      <Flex
        border={"1px solid red"}
        p={200}
        m={150}
        gap="40px"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          overflow="hidden"
          flexDirection="row"
          gap="40px"
          alignItems="center"
          justifyContent="center"
          border="2px solid pink"
          //   height="350px"
          //   width="800px"
          w="200vh"
          h="50vh"
          alignContent="center"
          textAlign="center"
          fontSize="xl"
        >
          {" "}
          <p> Was ist hier los?</p>
          <span></span>
          <p> Besser</p>
          <span></span>
          <p> Sturmfahrt</p>
          <span></span>
          <p> In einem Boot</p>
          <span></span>
          <p> Automat</p>
          <span></span>
          <p> Eisbär (Grauzone-Cover)</p>
        </Box>
        <Box
          flexDirection="row"
          gap="40px"
          alignItems="center"
          justifyContent="center"
          border="2px solid pink"
          w="200vh"
          h="50vh"
        >
          {" "}
          <Image
            src={melodie}
            objectFit="cover"
            borderRadius="10px"
            w="100%"
            h="50vh"
          />
          Image
        </Box>
        <Box
          flexDirection="row"
          gap="40px"
          alignItems="center"
          justifyContent="center"
          border="2px solid pink"
          w="200vh"
          h="50vh"
        >
          {" "}
          <Image
            // src={melodie}
            height="320px"
            width="320px"
            objectFit="cover"
            borderRadius="10px"
          />
          Video
        </Box>
      </Flex>
    </>
  );
};

export default TextC;
