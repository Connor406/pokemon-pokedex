export const PokemonApi = {
  search(term) {
    return fetch(`https://pokeapi.co/api/v2/ability/${term}`)
      .then((response) => {
        return response.json();
      })
      .then((jsonRes) => {
        return jsonRes.results;
      });
  },

  getPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((resp) => {
        return resp.json();
      })
      .then((jsonRes) => {
        return jsonRes.results;
      });
  },
};
