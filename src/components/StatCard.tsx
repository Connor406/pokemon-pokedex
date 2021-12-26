import React from "react"
import { Box, Text, Flex, UnorderedList, ListItem, Tag } from "@chakra-ui/react"
import { capitalize } from "../utils/capitalizer"
import { getTypeColor, getTypeGradient } from "../utils/typeColor"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { PokemonFullType } from "../types"
import { motion } from "framer-motion"

export interface StatsProps {
  pokemon: PokemonFullType
}

const StatCard: React.FC<StatsProps> = ({ pokemon }) => {
  const MotionBox = motion(Box)

  return (
    <MotionBox
      minW="22rem"
      minH="35rem"
      bgGradient={getTypeGradient(pokemon.types[0].type.name)}
      boxShadow={"2xl"}
      borderRadius={15}
      border="15px solid #FFCC00"
      p="0px 10px"
      initial={{
        x: 800,
        y: 300,
        rotateZ: -90,
        rotateY: 90,
        scale: 10,
      }}
      animate={{ x: 0, y: 0, rotateZ: 0, rotateY: 0, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
    >
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
          const typeColor = getTypeColor(type.type.name)
          const color = typeColor === "yellow" ? "orange" : typeColor
          return (
            <Tag key={type.slot} w={20} colorScheme={color} justifyContent="center" m={2}>
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
    </MotionBox>
  )
}

export default StatCard
