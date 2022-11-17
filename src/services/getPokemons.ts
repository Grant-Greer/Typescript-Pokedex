export const getPokemons = async (offset: number) =>
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`).then(
    async (response) => response.json()
  );
