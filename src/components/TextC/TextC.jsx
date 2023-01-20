import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const TextC = () => {
  return (
    <>
      <Flex
        color="white"
        flexDirection={"column"}
        border={"2px solid red"}
        display="flex"
        alignContent="center"
        textAlign="center"
        fontSize="xl"
        justifyContent="center"
        flexWrap="nowrap"
        alignItems="center"
      >
        <Box
          w="200px"
          color="green.500"
          flexDirection="column"
          alignContent="center"
          textAlign="center"
          fontSize="xl"
          justifyContent="center"
          flexWrap="nowrap"
          display="flex"
          alignItems="center"
          border="1px solid white"
        >
          <Text display={"flex"} flexDirection={"column"}>
            Was ist hier los?
          </Text>
        </Box>
        <Box
          w="200px"
          color="blue.500"
          border="1px solid white"
          flexDirection="column"
        >
          <Text>Besser</Text>
        </Box>
        <Box w="200px" color="red.500" border="1px solid white">
          <Text> Sturmfahrt</Text>
        </Box>
        <Box w="200px" color="green.500" border="1px solid white">
          <Text> In einem Boot</Text>
        </Box>
        <Box w="200px" color="blue.500" border="1px solid white">
          <Text> Automat</Text>
        </Box>
        <Box w="200px" color="red.500" border="1px solid white">
          <Text> Eisbär (Grauzone-Cover)</Text>
        </Box>
      </Flex>
    </>
  );
};

export default TextC;
