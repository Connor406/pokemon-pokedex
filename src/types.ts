export type PokeType = {
  name: string;
  url: string;
};

export type PokemonFullType = {
  name: string;
  height: string;
  weight: string;
  abilities: [{ slot: number; ability: { name: string } }];
  stats: [{ base_stat: number; effort: number; stat: { name: string } }];
  types: [{ slot: number; type: { name: string } }];
  id: number;
};
