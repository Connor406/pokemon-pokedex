import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Image,
  Flex,
  UnorderedList,
  ListItem,
  Tag,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { PokemonFullType } from "../types";
import { capitalize } from "../utils/capitalizer";
import { Wrapper } from "./Wrapper";

interface CharacterDisplayProps {
  pokemon: PokemonFullType;
  routeNum: number;
}

export const CharacterDisplay: React.FC<CharacterDisplayProps> = ({
  pokemon,
  routeNum,
}) => {
  const router = useRouter();

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
          objectFit="cover"
        />
        <Box>
          <Text fontSize={50}>{capitalize(pokemon.name)}</Text>
          <Box border="1px" borderRadius={10} padding={4}>
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
          </Box>
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
          <Box>
            <Text fontSize={30} mt={10}>
              Stats
            </Text>
            <Box>
              {pokemon.stats.map((stat) => {
                return (
                  <Flex
                    key={stat.stat.name}
                    mt={2}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Text mr={4}>{stat.base_stat}</Text>
                    <ArrowForwardIcon mr={4} />
                    <Text fontWeight="bold">{capitalize(stat.stat.name)}</Text>
                  </Flex>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Flex>

      <Button
        position="fixed"
        bottom={10}
        right={10}
        colorScheme={getTypeColor(pokemon.types[0].type.name)}
        onClick={() => router.push("/")}
      >
        go back
      </Button>
    </Wrapper>
  );
};
