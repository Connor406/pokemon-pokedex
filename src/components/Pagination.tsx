import React from "react"
import { Button, Flex } from "@chakra-ui/react"
import { useAtom } from "jotai"
import { useUpdateAtom } from "jotai/utils"
import { loaderAtom, paginationAtom, pokemonListAtom } from "../store"
import { PokemonApi } from "./PokemonApi"

function Pagination() {
  const [id, setNextId] = useAtom(paginationAtom)
  const setPokemonList = useUpdateAtom(pokemonListAtom)
  const setIsLoading = useUpdateAtom(loaderAtom)

  const nextPageHigh = id.high + id.limit < 898 ? id.high + id.limit : 898

  return (
    <Flex h="6rem" w="100vw" justifyContent="center">
      {id.low > 1 && (
        <Button
          onClick={() => {
            PokemonApi.getPokemon(id.low - id.limit, id.low - 1, setPokemonList, setIsLoading)
            setNextId({ ...id, low: id.low - id.limit, high: id.low - 1 })
          }}
          m="1rem"
          variant="ghost"
        >
          Previous Page
        </Button>
      )}
      {id.high < 898 && (
        <Button
          onClick={() => {
            PokemonApi.getPokemon(id.high + 1, nextPageHigh, setPokemonList, setIsLoading)
            setNextId({
              ...id,
              low: id.high + 1,
              high: nextPageHigh,
            })
          }}
          m="1rem"
          variant="ghost"
        >
          Next Page
        </Button>
      )}
    </Flex>
  )
}

export default Pagination
