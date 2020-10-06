export function getPokemonNames () {
  const endpoint = 'https://pokeapi.co/api/v2/pokedex/1/';

  return fetch(endpoint)
    .then((response) => response.json())
    .then((object) => object.pokemon_entries)
}

export async function treatPokemonList () {
  const rawPokemonList = await getPokemonNames();
  const treatedPokemonList = await rawPokemonList
    .map(pokemon => pokemon.pokemon_species.name);
  return treatedPokemonList;
}

