import React, { useState } from "react"
import { Pokemon } from "../components/Pokemon"
import { PokemonApi } from "../components/PokemonApi"
import SearchBar from "../components/SearchBar"
import SinglePokemonDisplay from "../components/SinglePokemonDisplay"
import { useUpdateAtom, useAtomValue } from "jotai/utils"
import { loaderAtom, paginationAtom, pokemonListAtom } from "../store"
import Pagination from "../components/Pagination"

const Index = () => {
  const [searchResult, setSearchResult] = useState()
  const [input, setInput] = useState("")
  const setPokemonList = useUpdateAtom(pokemonListAtom)
  const setLoading = useUpdateAtom(loaderAtom)
  const id = useAtomValue(paginationAtom)

  const handleSearch = () => {
    setLoading(true)
    PokemonApi.findPokemonByName(input.toLowerCase())
      .then(res => {
        setSearchResult(res)
      })
      .then(() => setLoading(false))
  }

  return (
    <>
      <SearchBar
        handleLogoClick={() => {
          setSearchResult(undefined)
          PokemonApi.getPokemon(1, id.limit, setPokemonList, setLoading)
        }}
        value={input}
        handleSubmit={() => handleSearch()}
        handleChange={e => setInput(e.target.value)}
      />
      {searchResult === undefined ? (
        <Pokemon />
      ) : (
        <SinglePokemonDisplay pokemon={searchResult}></SinglePokemonDisplay>
      )}

      <Pagination />
    </>
  )
}

export default Index
