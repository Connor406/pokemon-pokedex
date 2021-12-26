import { atom } from "jotai"
import { PokemonFullType } from "../types"

export const pokemonListAtom = atom<PokemonFullType[]>([])
