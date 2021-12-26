import React, { useEffect } from "react"
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import Link from "next/link"
import { capitalize } from "../utils/capitalizer"
import { useAtom } from "jotai"
import { loaderAtom, pokemonListAtom, paginationAtom } from "../store"
import { PokemonApi } from "./PokemonApi"
import Loader from "./Loader"

export const Pokemon: React.FC = () => {
  const [pokemonList, setPokemonList] = useAtom(pokemonListAtom)
  const [id, setId] = useAtom(paginationAtom)
  const [_, setIsLoading] = useAtom(loaderAtom)

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
              <Box
                w="300px"
                h="300px"
                border="1px"
                borderRadius={10}
                p={4}
                m={4}
                textAlign="center"
                _hover={{
                  backgroundColor: "rgba(0, 152, 255, 0.3)",
                  borderColor: "white",
                  cursor: "pointer",
                }}
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
              </Box>
            </Link>
          )
        })}
      </Flex>
    </Box>
  )
}
