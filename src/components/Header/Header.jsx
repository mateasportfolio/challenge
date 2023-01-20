import React from "react";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export const Header = () => {
  return (
    <>
      <Flex
        border={"1px solid red"}
        p="15px"
        w="100%"
        justifyContent="space-between"
      >
        <Flex>
          <Box>
            <Text color={"teal.400"}>Header</Text>
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
              color={"teal.400"}
            >
              Newsletter
            </Link>
          </Button>
        </Box>
      </Flex>
    </>
  );
};
