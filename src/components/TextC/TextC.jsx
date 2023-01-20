import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import melodie from "../../assets/melodie.png";

const TextC = () => {
  return (
    <>
      {/* <Flex
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
        <Flex
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
          border="1px solid red"
        >
          <Text display={"flex"} flexDirection={"column"}>
            Was ist hier los?
          </Text>
        </Flex>
        <Box
          w="200px"
          color="blue.500"
          border="4px solid teal"
          flexDirection="column"
        >
          <Text>Besser</Text>
        </Box>
        <Box w="200px" color="red.500" border="1px solid purple">
          <Text> Sturmfahrt</Text>
        </Box>
        <Box w="200px" color="green.500" border="1px solid purple">
          <Text> In einem Boot</Text>
        </Box>
        <Box w="200px" color="blue.500" border="1px solid purple">
          <Text> Automat</Text>
        </Box>
        <Box w="200px" color="red.500" border="1px solid purple">
          <Text> Eisbär (Grauzone-Cover)</Text>
        </Box>
      </Flex> */}

      <Flex
        wrap="wrap"
        gap="4px"
        alignItems="center"
        justifyContent="center"
        border={"1px solid red"}
      >
        <Flex border="1px solid pink" flexDirection="column" cursor="pointer">
          <Box
            color="green.500"
            flexDirection="column"
            alignContent="center"
            textAlign="center"
            fontSize="xl"
            justifyContent="center"
            flexWrap="nowrap"
            display="flex"
            alignItems="center"
          >
            <Text
              display={"flex"}
              flexDirection={"column"}
              w="200px"
              color="blue.500"
              border="1px solid teal"
            >
              Was ist hier los?
            </Text>

            <Text
              display={"flex"}
              flexDirection={"column"}
              w="200px"
              color="blue.500"
              border="1px solid teal"
            >
              Besser
            </Text>
            <Text
              display={"flex"}
              flexDirection={"column"}
              w="200px"
              color="blue.500"
              border="1px solid teal"
            >
              {" "}
              Sturmfahrt
            </Text>
            <Text
              display={"flex"}
              flexDirection={"column"}
              w="200px"
              color="blue.500"
              border="1px solid teal"
            >
              {" "}
              In einem Boot
            </Text>
            <Text
              display={"flex"}
              flexDirection={"column"}
              w="200px"
              color="blue.500"
              border="1px solid teal"
            >
              {" "}
              Automat
            </Text>
            <Text
              display={"flex"}
              flexDirection={"column"}
              w="200px"
              color="blue.500"
              border="1px solid teal"
            >
              {" "}
              Eisbär (Grauzone-Cover)
            </Text>
            <Image
              // src={cover}
              height="320px"
              width="320px"
              objectFit="cover"
              borderRadius="10px"
            />
          </Box>
        </Flex>
        <Flex border="1px solid pink" flexDirection="column" cursor="pointer">
          <Text
            marginBottom="10px"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            Image
          </Text>
          <Image
            src={melodie}
            height="320px"
            width="320px"
            objectFit="cover"
            borderRadius="10px"
          />
        </Flex>
        <Flex border="1px solid pink" flexDirection="column" cursor="pointer">
          <Text
            marginBottom="10px"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            Video
          </Text>
          <Image
            height="320px"
            width="320px"
            objectFit="cover"
            borderRadius="10px"
          />
        </Flex>
      </Flex>
    </>
  );
};

export default TextC;
