"use client";

import { useState, useEffect, useMemo } from "react";
import PokemonCard from "@/components/PokemonCard";
import LoadButton from "@/components/LoadButton";
import { getAllPokemons, getPokemonDetails } from "@/services/api";
import { AllPokemonsResults } from "@/types";
import Header from "@/components/Header";
import { filterPokemonsByName } from "@/helpers/utils";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState<AllPokemonsResults[]>([]);

  const [offset, setOffset] = useState<number>(0);
  const [valueFilter, setValueFilter] = useState<string>("");
  const limit = 10;

  async function loadPokemons() {
    const data = await getAllPokemons(limit, offset);

    const detailed = await Promise.all(
      data.results.map(async (p) => {
        const details = await getPokemonDetails(p.url);
        return { ...p, details };
      }),
    );

    setPokemons((prev) => [...prev, ...detailed]);
    setOffset((prev) => prev + limit);
  }

  useEffect(() => {
    loadPokemons();
  }, []);

  const filteredPokemons = useMemo(() => {
    return valueFilter ? filterPokemonsByName(pokemons, valueFilter) : pokemons;
  }, [valueFilter, pokemons]);

  return (
    <>
      <Header setParamChange={setValueFilter} />
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center gap-5 px-6 py-6">
          {filteredPokemons?.length > 0 ? (
            <>
              {filteredPokemons.map((pokemon, index) => {
                const id = pokemon.url.split("/").filter(Boolean).pop();

                return (
                  <PokemonCard
                    key={id}
                    name={pokemon.name}
                    image={
                      pokemon.details.sprites.other.dream_world.front_default
                    }
                    types={pokemon.details.types.map((type) => type.type.name)}
                    identification={index + 1}
                  />
                );
              })}
            </>
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Não foi possível encontrar um pokemon com esse nome.
            </p>
          )}
        </div>
        <div className="flex justify-center py-5">
          <LoadButton onClick={loadPokemons} />
        </div>
      </div>
    </>
  );
}
