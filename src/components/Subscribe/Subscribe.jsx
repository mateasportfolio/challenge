import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
} from "@chakra-ui/react";

const Subscribe = () => {
  const [input, setInput] = useState(0);

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <Flex w="100%" h="200px">
      <FormControl isInvalid={isError}>
        <FormLabel
          alignItems="center"
          justifyContent="center"
          fontSize="3xl"
          alignContent="center"
        >
          Newsletter Subscription
        </FormLabel>
        <Input
          type="email"
          value={input}
          onChange={handleInputChange}
          bgColor="pink"
        />
        {!isError ? (
          <FormHelperText>
            Enter the email you'd like to receive the newsletter on.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
    </Flex>
  );
};

export default Subscribe;
