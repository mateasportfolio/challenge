import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import melodie from "../../assets/melodie.png";

const TextC = () => {
  let i = alert("Frontend Coding Challenge");
  if (i < 5) prompt("Try it out!");
  else {
    prompt("Try it out :D");
  }
  i++;
  console.log(i);

  return (
    <>
      <Flex
        maxW="1200px"
        border={"1px solid red"}
        p="20"
        m="10px"
        gap="40px"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          m="10px"
          maxW="1200px"
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
          maxW="1200px"
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
          maxW="1200px"
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
