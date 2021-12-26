import { ArrowForwardIcon } from "@chakra-ui/icons"
import { Box, Text, Image, Flex, UnorderedList, ListItem, Tag, Button } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import React from "react"
import { PokemonFullType } from "../types"
import { capitalize } from "../utils/capitalizer"
import { Wrapper } from "./Wrapper"

interface CharacterDisplayProps {
  pokemon: PokemonFullType
}

export const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ pokemon }) => {
  const router = useRouter()

  const typeColors = [
    { type: ["fire", "dragon", "fighting"], color: "orange" },
    { type: ["water", "ice", "flying"], color: "cyan" },
    { type: ["bug", "electric", "psychic"], color: "yellow" },
    { type: ["grass"], color: "green" },
  ]

  function getTypeColor(type) {
    const c = typeColors.find(t => t.type.includes(type))
    if (!c) return "gray"
    return c.color
  }

  return (
    <Wrapper>
      <Flex wrap="wrap" mt={10}>
        <Image src={pokemon.sprites.other["official-artwork"].front_default} objectFit="contain" />
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
                {pokemon.abilities.map(ability => {
                  return <ListItem key={ability.slot}>{capitalize(ability.ability.name)}</ListItem>
                })}
              </UnorderedList>
            </Flex>
          </Box>
          <Text fontSize={30}>Type</Text>
          <Flex>
            {pokemon.types.map(type => {
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
              )
            })}
          </Flex>
          <Box>
            <Text fontSize={30} mt={10}>
              Stats
            </Text>
            <Box>
              {pokemon.stats.map(stat => {
                return (
                  <Flex key={stat.stat.name} mt={2} justifyContent="flex-start" alignItems="center">
                    <Text mr={4}>{stat.base_stat}</Text>
                    <ArrowForwardIcon mr={4} />
                    <Text fontWeight="bold">{capitalize(stat.stat.name)}</Text>
                  </Flex>
                )
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
  )
}
