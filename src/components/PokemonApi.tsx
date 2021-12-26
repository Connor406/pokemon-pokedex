import axios from "axios"
import { PokemonFullType } from "../types"

export const PokemonApi = {
  async getPokemon(low: number, high: number, setAtom, setIsLoading): Promise<any> {
    try {
      setIsLoading(true)
      const pokemon: PokemonFullType[] = []
      const ids = Array(high - low + 1)
        .fill(0)
        .map((_, i) => low + i)
      ids.forEach(async id => {
        const r = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        pokemon.push(r.data)
        pokemon.sort((a, b) => {
          if (b.id > a.id) return -1
        })
        setAtom([...pokemon])
      })
      return setIsLoading(false)
    } catch (err) {
      console.log(err)
      throw Error(err)
    }
  },

  async findPokemonByName(name: string): Promise<any> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          alert("Oops... try another search")
        }
      })
      .then(jsonRes => {
        console.log(jsonRes)
        return jsonRes
      })
  },
}
