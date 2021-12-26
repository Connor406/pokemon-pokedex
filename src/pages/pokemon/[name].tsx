import { Box, Image, Text } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import React, { useEffect, useState } from "react"
import { CharacterDisplay } from "../../components/CharacterDisplay"
import Loader from "../../components/Loader"
import { PokemonApi } from "../../components/PokemonApi"

const Specs: React.FC = ({}) => {
  const [details, setDetails] = useState()

  const router = useRouter()
  const name = router.query.name
  const routerValue = Array.isArray(name) ? name[0] : name

  const getPokemon = () => {
    PokemonApi.findPokemonByName(routerValue).then(results => setDetails(results))
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return <Box>{details ? <CharacterDisplay pokemon={details} /> : <Loader />}</Box>
}

export default Specs

// persists query params after refresh
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}
