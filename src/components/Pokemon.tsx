import React, { useEffect } from "react"
import Loader from "./Loader"
import Link from "next/link"
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { capitalize } from "../utils/capitalizer"
import { useAtom } from "jotai"
import { loaderAtom, pokemonListAtom, paginationAtom } from "../store"
import { PokemonApi } from "./PokemonApi"
import { useAtomValue } from "jotai/utils"
import { motion } from "framer-motion"
import { getTypeGradient } from "../utils/typeColor"

export const Pokemon: React.FC = () => {
  const [pokemonList, setPokemonList] = useAtom(pokemonListAtom)
  const id = useAtomValue(paginationAtom)
  const [_, setIsLoading] = useAtom(loaderAtom)

  const MotionBox = motion(Box)

  useEffect(() => {
    PokemonApi.getPokemon(id.low, id.high, setPokemonList, setIsLoading)
  }, [])

  return (
    <Box>
      <Loader />
      <Flex wrap="wrap" justifyContent="center" alignItems="center">
        {pokemonList.map(pokemon => {
          return (
            <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
              <MotionBox
                w="300px"
                h="300px"
                bgGradient={getTypeGradient(pokemon.types[0].type.name)}
                borderRadius={10}
                boxShadow="xl"
                p={4}
                m={4}
                textAlign="center"
                whileHover={{ scale: 1.05 }}
                transitionDuration=".5s"
              >
                <Image
                  backgroundColor="rgba(0, 0, 0, 0.2)"
                  borderRadius={10}
                  p={2}
                  m="auto"
                  boxSize="200px"
                  src={pokemon.sprites.other["official-artwork"].front_default}
                ></Image>
                <Text>#{pokemon.id}</Text>
                <Text fontSize={20}>{capitalize(pokemon.name)}</Text>
              </MotionBox>
            </Link>
          )
        })}
      </Flex>
    </Box>
  )
}
