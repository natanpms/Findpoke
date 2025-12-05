import { AllPokemonsResults } from "@/types";

export function filterPokemonsByName(
  pokemons: AllPokemonsResults[],
  searchTerm: string
) {
  if (!searchTerm) return pokemons;

  return pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
