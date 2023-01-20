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
          bg="green.500"
          flexDirection="column"
          alignContent="center"
          textAlign="center"
          fontSize="xl"
          justifyContent="center"
          flexWrap="nowrap"
          display="flex"
          alignItems="center"
        >
          <Text display={"flex"} flexDirection={"column"}>
            Was ist hier los?
          </Text>
        </Box>
        <Box w="200px" bg="blue.500" flexDirection="column">
          <Text>Besser</Text>
        </Box>
        <Box w="200px" bg="red.500">
          <Text> Sturmfahrt</Text>
        </Box>
        <Box w="200px" bg="green.500">
          <Text> In einem Boot</Text>
        </Box>
        <Box w="200px" bg="blue.500">
          <Text> Automat</Text>
        </Box>
        <Box w="200px" bg="red.500">
          <Text> Eisbär (Grauzone-Cover)</Text>
        </Box>
      </Flex>
    </>
  );
};

export default TextC;
