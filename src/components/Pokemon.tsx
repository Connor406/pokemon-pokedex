import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { PokeType } from "../types";
import Link from "next/link";
import {
  findNumForPhoto,
  findNumWithoutZeroes,
} from "../utils/getNumberFromURL";

interface PokemonProps {
  pokemonList: PokeType[];
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemonList }) => {
  return (
    <Box>
      {pokemonList ? (
        <Flex wrap="wrap" justifyContent="center" alignItems="center">
          {pokemonList.map((pokemon) => {
            let number = findNumForPhoto(pokemon);
            let numWithoutZeroes = findNumWithoutZeroes(pokemon);
            return (
              <Link key={pokemon.name} href={`/pokemon/${numWithoutZeroes}`}>
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
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${number}.png`}
                  ></Image>
                  <Text>{number}</Text>
                  <Text fontSize={20}>{pokemon.name}</Text>
                </Box>
              </Link>
            );
          })}
        </Flex>
      ) : (
        <Box>loading...</Box>
      )}
    </Box>
  );
};
