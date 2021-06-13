import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { Pokemon } from "../components/Pokemon";
import { PokemonApi } from "../utils/PokemonApi";

const Index = () => {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    PokemonApi.getPokemon().then((results) => setPokemon(results));
  };

  useEffect(() => fetchPokemon(), []);

  return (
    <Wrapper variant="lg">
      <Box>Gotta catch 'em all!</Box>
      <Pokemon pokemonList={pokemon} />
    </Wrapper>
  );
};

export default Index;
