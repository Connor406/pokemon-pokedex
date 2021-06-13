import {
  Box,
  Text,
  Image,
  Flex,
  UnorderedList,
  ListItem,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import { PokemonFullType } from "../types";
import { Wrapper } from "./Wrapper";

interface CharacterDisplayProps {
  pokemon: PokemonFullType;
  routeNum: number;
}

export const CharacterDisplay: React.FC<CharacterDisplayProps> = ({
  pokemon,
  routeNum,
}) => {
  const capitalize = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  console.log(pokemon);

  const getTypeColor = (type) => {
    if (type === "fire" || type === "dragon" || type === "fighting") {
      return "orange";
    } else if (type === "water" || type === "ice" || type === "flying") {
      return "cyan";
    } else if (type === "bug" || type === "electric" || type === "psychic") {
      return "yellow";
    } else if (type === "grass") {
      return "green";
    } else {
      return "gray";
    }
  };

  return (
    <Wrapper>
      <Flex wrap="wrap" mt={10}>
        <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${routeNum}.png`}
        />
        <Box>
          <Text fontSize={40}>{capitalize(pokemon.name)}</Text>
          <Flex>
            <Text fontWeight="bold" mr={2}>
              Height:
            </Text>
            {pokemon.height} feet
          </Flex>
          <Flex>
            <Text fontWeight="bold" mr={2}>
              Weight:
            </Text>
            {pokemon.weight} lbs
          </Flex>
          <Flex wrap="wrap">
            <Text fontWeight="bold" mr={4}>
              Abilities:
            </Text>
            <UnorderedList>
              {pokemon.abilities.map((ability) => {
                return (
                  <ListItem key={ability.slot}>
                    {capitalize(ability.ability.name)}
                  </ListItem>
                );
              })}
            </UnorderedList>
          </Flex>
          <Text fontSize={30}>Type</Text>
          <Flex>
            {pokemon.types.map((type) => {
              return (
                <Tag
                  key={type.slot}
                  w={20}
                  colorScheme={getTypeColor(type.type.name)}
                  justifyContent="center"
                  m={2}
                >
                  {capitalize(type.type.name)}
                </Tag>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Wrapper>
  );
};
