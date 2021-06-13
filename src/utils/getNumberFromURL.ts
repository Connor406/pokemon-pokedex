import { PokeType } from "../types";

// Finds the Pokemon's number from the PokeAPI's response URL and
// returns in format that works in image source from pokemon.com's image assets

export const findNumForPhoto = (pokemon: PokeType) => {
  const url = pokemon.url.split("");
  let num = "00" + url[34];
  if (url[35] !== "/") {
    num = "0" + url[34] + url[35];
  } else if (url[36] && url[36] !== "/") {
    num = url[34] + url[35] + url[36];
  }
  return num;
};

export const findNumWithoutZeroes = (pokemon: PokeType) => {
  const url = pokemon.url.split("");
  let num = url[34];
  if (url[35] !== "/") {
    num = url[34] + url[35];
  } else if (url[36] && url[36] !== "/") {
    num = url[34] + url[35] + url[36];
  }
  return num;
};
