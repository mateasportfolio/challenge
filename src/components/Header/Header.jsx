import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <Flex
        bg="purple.700"
        border={"1px solid white"}
        p="6px"
        w="100%"
        justifyContent="space-between"
      >
        <Flex>
          <Box>
            <Text>Header</Text>
          </Box>
        </Flex>

        <Box
          flexDirection="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          m="0 12px"
        >
          <Button
            bg="transparent"
            border="1px solid purple"
            p="5px 15px"
            m="0px 8px"
          >
            <Link
              flex-direction="column"
              borderStyle="solid"
              variant="outline"
              fontWeight="medium"
              fontSize="md"
              fontFamily="Roboto"
              href="/blog"
            >
              Eisbrecher
            </Link>
          </Button>
          <Button
            bg="transparent"
            border="1px solid purple"
            p="5px 15px"
            m="0px 8px"
          >
            <Link
              flex-direction="column"
              variant="secondary"
              color="black.900"
              fontWeight="medium"
              fontSize="lg"
              href="/blog"
            >
              Musik
            </Link>
          </Button>
          <Button
            bg="transparent"
            border="1px solid purple"
            p="5px 15px"
            m="0px 8px"
          >
            <Link
              flex-direction="column"
              variant="secondary"
              color="black.900"
              fontWeight="medium"
              fontSize="lg"
              href="/blog"
            >
              Log In
            </Link>
          </Button>
        </Box>
      </Flex>
    </>
  );
};
