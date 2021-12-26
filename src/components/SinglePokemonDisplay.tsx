import React from "react"
import { PokemonFullType } from "../types"
import Link from "next/link"
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import Loader from "./Loader"

interface SinglePokemonDisplayProps {
  pokemon?: PokemonFullType
}

const SinglePokemonDisplay: React.FC<SinglePokemonDisplayProps> = ({ pokemon }) => {
  return (
    <Box>
      {pokemon ? (
        <Flex wrap="wrap" justifyContent="center" alignItems="center">
          <Link key={pokemon.name} href={`/pokemon/${pokemon.name}`}>
            <Box w="300px" h="300px" border="1px" borderRadius={10} p={4} m={4} textAlign="center">
              <Image
                backgroundColor="rgba(0, 0, 0, 0.2)"
                borderRadius={10}
                p={2}
                m="auto"
                boxSize="200px"
                src={pokemon.sprites.other["official-artwork"].front_default}
              ></Image>
              <Text>{pokemon.id}</Text>
              <Text fontSize={20}>{pokemon.name}</Text>
            </Box>
          </Link>
        </Flex>
      ) : (
        <Loader />
      )}
    </Box>
  )
}

export default SinglePokemonDisplay
