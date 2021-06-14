export const PokemonApi = {
  getPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((resp) => {
        return resp.json();
      })
      .then((jsonRes) => {
        return jsonRes.results;
      });
  },

  findPokemonById(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        return jsonRes;
      });
  },
};
