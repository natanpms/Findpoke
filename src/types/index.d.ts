export type AllPokemons = {
  count: number;
  next: string;
  previous: null;
  results: AllPokemonsResults[];
};

export type AllPokemonsResults = {
  name: string;
  url: string;
};
