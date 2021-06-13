import { Box, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { CharacterDisplay } from "../../components/CharacterDisplay";
import { Wrapper } from "../../components/Wrapper";
import { PokemonApi } from "../../utils/PokemonApi";

const Specs: React.FC = ({}) => {
  const [details, setDetails] = useState();

  const router = useRouter();
  let routerValue = router.query.id;

  const getPokemonId = () => {
    let value;
    if (routerValue.length === 1) {
      const newValue = "00" + routerValue;
      value = newValue;
    } else if (routerValue.length === 2) {
      const newValue = "0" + routerValue;
      value = newValue;
    } else {
      null;
    }
    return value;
  };

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
        <CharacterDisplay pokemon={details} routeNum={getPokemonId()} />
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
