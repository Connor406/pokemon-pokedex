export const PokemonApi = {
  getPokemon(url) {
    return fetch(url)
      .then((resp) => {
        return resp.json();
      })
      .then((jsonRes) => {
        return jsonRes;
      });
  },

  findPokemonById(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          alert("Oops... try another search");
        }
      })
      .then((jsonRes) => {
        return jsonRes;
      });
  },
};
