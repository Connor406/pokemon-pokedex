import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { PokeType } from "../types";

interface PokemonProps {
  pokemonList: PokeType[];
}

export const Pokemon: React.FC<PokemonProps> = ({ pokemonList }) => {
  // Finds the Pokemon's number from the PokeAPI's response URL and
  // returns in format that works in image source from pokemon.com's image assets
  // honestly.... pretty proud of this one lol
  const findNum = (pokemon: PokeType) => {
    const url = pokemon.url.split("");
    let num = "00" + url[34];
    if (url[35] !== "/") {
      num = "0" + url[34] + url[35];
    } else if (url[36] && url[36] !== "/") {
      num = url[34] + url[35] + url[36];
    }
    return num;
  };

  return (
    <Box>
      {pokemonList ? (
        <Flex wrap="wrap" justifyContent="center" alignItems="center">
          {pokemonList.map((pokemon) => {
            return (
              <Box
                key={pokemon.name}
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
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${findNum(
                    pokemon
                  )}.png`}
                ></Image>
                <Text>{findNum(pokemon)}</Text>
                <Text fontSize={20}>{pokemon.name}</Text>
              </Box>
            );
          })}
        </Flex>
      ) : (
        <Box>loading...</Box>
      )}
    </Box>
  );
};
