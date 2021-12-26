import React from "react"
import StatCard from "./StatCard"
import { Box, Button, Flex, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useRouter } from "next/dist/client/router"
import { PokemonFullType } from "../types"
import { getTypeColor, getTypeGradient } from "../utils/typeColor"

interface CharacterDisplayProps {
  pokemon: PokemonFullType
}

export const CharacterDisplay: React.FC<CharacterDisplayProps> = ({ pokemon }) => {
  const router = useRouter()

  const MotionImage = motion(Image)

  return (
    <Box
      bgGradient={getTypeGradient(pokemon.types[0].type.name)}
      w="100vw"
      h="100vh"
      pos="absolute"
    >
      <Flex wrap="wrap" mt={10}>
        <MotionImage
          src={pokemon.sprites.other["official-artwork"].front_default}
          objectFit="contain"
          initial={{ x: -400 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        />
        <StatCard pokemon={pokemon} />
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
    </Box>
  )
}
