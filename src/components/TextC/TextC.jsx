import React from "react";
import { Box, Flex, Text, Square } from "@chakra-ui/react";

const TextC = () => {
  return (
    <Flex color="white" flexDirection={"row"}>
      <Box w="100px" bg="green.500">
        <Text>Was ist hier los?</Text>
      </Box>
      <Square w="100px" bg="blue.500">
        <Text>Besser</Text>
      </Square>
      <Box w="100px" bg="red.500">
        <Text> Sturmfahrt</Text>
      </Box>
      <Box w="100px" bg="green.500">
        <Text> In einem Boot</Text>
      </Box>
      <Box w="100px" bg="blue.500">
        <Text> Automat</Text>
      </Box>
      <Box w="100px" bg="red.500">
        <Text> Eisbär (Grauzone-Cover)</Text>
      </Box>
    </Flex>
  );
};

export default TextC;
