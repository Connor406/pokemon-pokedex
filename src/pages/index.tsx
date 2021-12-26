import React, { useState } from "react"
import { Pokemon } from "../components/Pokemon"
import { PokemonApi } from "../components/PokemonApi"
import SearchBar from "../components/SearchBar"
import { useUpdateAtom, useAtomValue } from "jotai/utils"
import { loaderAtom, paginationAtom, pokemonListAtom } from "../store"
import Pagination from "../components/Pagination"

const Index = () => {
  const [input, setInput] = useState("")
  const setPokemonList = useUpdateAtom(pokemonListAtom)
  const setLoading = useUpdateAtom(loaderAtom)
  const id = useAtomValue(paginationAtom)

  const handleSearch = () => {
    setLoading(true)
    PokemonApi.findPokemonByName(input.toLowerCase())
      .then(res => {
        setPokemonList([res])
      })
      .then(() => setLoading(false))
  }

  return (
    <>
      <SearchBar
        handleLogoClick={() => {
          PokemonApi.getPokemon(1, id.limit, setPokemonList, setLoading)
        }}
        value={input}
        handleSubmit={() => handleSearch()}
        handleChange={e => setInput(e.target.value)}
      />
      <Pokemon />
      <Pagination />
    </>
  )
}

export default Index
