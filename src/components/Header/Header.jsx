import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import Subscribe from "../Subscribe/Subscribe";

export const Header = () => {
  return (
    <>
      <Flex
        bg="purple.600"
        border={"1px solid red"}
        p="15px"
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
            {/* <Link
              flex-direction="column"
              borderStyle="solid"
              variant="outline"
              fontWeight="medium"
              fontSize="md"
              fontFamily="Roboto"
              href="/blog"
            >
              Newsletter
            </Link> */}
            <Subscribe />
          </Button>
        </Box>
      </Flex>
    </>
  );
};
