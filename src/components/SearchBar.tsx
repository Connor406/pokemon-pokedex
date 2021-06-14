import { Image } from "@chakra-ui/image";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { Wrapper } from "./Wrapper";

interface SearchBarProps {
  value: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  handleSubmit: React.FormEventHandler<HTMLInputElement> &
    React.MouseEventHandler<HTMLButtonElement> &
    React.KeyboardEventHandler<HTMLInputElement>;
  handleLogoClick: any;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  handleChange,
  handleSubmit,
  handleLogoClick,
}) => {
  return (
    <Wrapper bgColor="blue">
      <Box>
        <Button variant="link" onClick={handleLogoClick}>
          <Image src="/Pokemon-Logo-500x313.png" w={200} />
        </Button>
        <Flex w={440} mx="auto">
          <Input
            color="white"
            placeholder="search by name"
            variant="filled"
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onKeyPress={(e) => {
              e.key === "Enter" ? handleSubmit(e) : null;
            }}
            my={10}
          />
          <Button
            type="submit"
            color="blue"
            onClick={handleSubmit}
            ml={2}
            my={10}
          >
            Submit
          </Button>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default SearchBar;
