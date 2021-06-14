import { Box, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { CharacterDisplay } from "../../components/CharacterDisplay";
import { getPokemonId } from "../../utils/getNumberForPhoto";
import { PokemonApi } from "../../components/PokemonApi";

const Specs: React.FC = ({}) => {
  const [details, setDetails] = useState();

  const router = useRouter();
  let routerValue = router.query.id;

  const getPokemon = () => {
    PokemonApi.findPokemonById(routerValue).then((results) =>
      setDetails(results)
    );
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Box>
      {details ? (
        <CharacterDisplay
          pokemon={details}
          routeNum={getPokemonId(routerValue as string)}
        />
      ) : (
        "loading..."
      )}
    </Box>
  );
};

export default Specs;

// persists query params after refresh
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
