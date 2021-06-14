import React, { useEffect, useState } from "react";
import { Pokemon } from "../components/Pokemon";
import { PokemonApi } from "../components/PokemonApi";
import SearchBar from "../components/SearchBar";
import SinglePokemonDisplay from "../components/SinglePokemonDisplay";
import { Box, Button, Flex } from "@chakra-ui/react";

const Index = () => {
  const [searchResult, setSearchResult] = useState();
  const [pokemon, setPokemon] = useState([]) as any;
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentUrl, setCurrentUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();

  const fetchPokemon = () => {
    PokemonApi.getPokemon(currentUrl)
      .then((results) => {
        setPokemon(results),
          setNextUrl(results.next),
          setPrevUrl(results.previous);
      })
      .then(() => setLoading(false));
  };

  const handleSearch = () => {
    setLoading(true);
    PokemonApi.findPokemonById(input.toLowerCase())
      .then((res) => {
        setSearchResult(res);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => fetchPokemon(), [currentUrl]);

  return (
    <>
      <SearchBar
        handleLogoClick={() => {
          setSearchResult(undefined),
            setCurrentUrl("https://pokeapi.co/api/v2/pokemon");
        }}
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
            <Pokemon pokemonList={pokemon.results} />
          ) : (
            <SinglePokemonDisplay
              searchResult={searchResult}
            ></SinglePokemonDisplay>
          )}
        </>
      )}

      <Flex justifyContent="center" alignItems="center">
        <Button
          variant="ghost"
          colorScheme="blue"
          my={15}
          onClick={() => setCurrentUrl(prevUrl)}
        >
          Previous page
        </Button>

        <Button
          colorScheme="blue"
          variant="ghost"
          my={15}
          onClick={() => setCurrentUrl(nextUrl)}
        >
          Next page
        </Button>
      </Flex>
    </>
  );
};

export default Index;
