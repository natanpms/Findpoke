export type AllPokemons = {
  count: number;
  next: string;
  previous: null;
  results: AllPokemonsResults[];
};

export type AllPokemonsResults = {
  name: string;
  url: string;
  details: PokemonDetails;
};

export type PokemonDetails = {
  ability: PokemonAbility[];
  stats: PokemonStats[];
  sprites: PokemonSprite;
  types: PokemonType[];
};

export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonSprite = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string;
    };
    home: {
      front_default: string;
      front_female: string;
      front_shiny: string;
      front_shiny_female: string;
    };
    official_artwork: {
      front_default: string;
      front_shiny: string;
    };
  };
};

export type PokemonStats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};
