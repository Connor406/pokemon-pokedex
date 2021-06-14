import React from "react";
import { PokemonFullType } from "../types";
import Link from "next/link";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { getPokemonId } from "../utils/getNumberForPhoto";

interface SinglePokemonDisplayProps {
  searchResult?: PokemonFullType;
}

const SinglePokemonDisplay: React.FC<SinglePokemonDisplayProps> = ({
  searchResult,
}) => {
  const photoNumber = getPokemonId(searchResult.id.toString());

  return (
    <Box>
      {searchResult ? (
        <Flex wrap="wrap" justifyContent="center" alignItems="center">
          <Link key={searchResult.name} href={`/pokemon/${searchResult.id}`}>
            <Box
              w="300px"
              h="300px"
              border="1px"
              borderRadius={10}
              p={4}
              m={4}
              textAlign="center"
            >
              <Image
                backgroundColor="rgba(0, 0, 0, 0.2)"
                borderRadius={10}
                p={2}
                m="auto"
                boxSize="200px"
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${photoNumber}.png`}
              ></Image>
              <Text>{searchResult.id}</Text>
              <Text fontSize={20}>{searchResult.name}</Text>
            </Box>
          </Link>
        </Flex>
      ) : (
        <Box>loading...</Box>
      )}
    </Box>
  );
};

export default SinglePokemonDisplay;
