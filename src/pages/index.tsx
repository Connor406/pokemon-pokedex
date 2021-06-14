import React, { useEffect, useState } from "react";
import { Pokemon } from "../components/Pokemon";
import { PokemonApi } from "../utils/PokemonApi";
import SearchBar from "../components/SearchBar";
import SinglePokemonDisplay from "../components/SinglePokemonDisplay";
import { Box } from "@chakra-ui/react";

const Index = () => {
  const [pokemon, setPokemon] = useState([]);
  const [searchResult, setSearchResult] = useState();
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchPokemon = () => {
    PokemonApi.getPokemon()
      .then((results) => setPokemon(results))
      .then(() => setLoading(false));
  };

  const handleSearch = () => {
    setLoading(true);
    PokemonApi.findPokemonById(input)
      .then((res) => setSearchResult(res))
      .then(() => setLoading(false));
  };

  useEffect(() => fetchPokemon(), []);

  return (
    <>
      <SearchBar
        handleLogoClick={() => setSearchResult(undefined)}
        value={input}
        handleSubmit={() => handleSearch()}
        handleChange={(e) => setInput(e.target.value)}
      />
      {loading ? (
        <Box m="auto" w="100%">
          loading...
        </Box>
      ) : (
        // if no value has been searched
        <>
          {searchResult === undefined ? (
            <Pokemon pokemonList={pokemon} />
          ) : (
            <SinglePokemonDisplay
              searchResult={searchResult}
            ></SinglePokemonDisplay>
          )}
        </>
      )}
    </>
  );
};

export default Index;
