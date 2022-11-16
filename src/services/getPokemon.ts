const URL = 'https://pokeapi.co/api/v2';
export const getPokemon = async (pathName: string) =>
	fetch(`${URL}${pathName}`).then(async response => response.json());
