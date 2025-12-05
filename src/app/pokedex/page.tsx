"use client";

import { useState, useEffect, useMemo } from "react";
import PokemonCard from "@/components/PokemonCard";
import LoadButton from "@/components/LoadButton";
import { getAllPokemons } from "@/services/api";
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
    setPokemons((prev) => [...prev, ...data.results]);
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
          {filteredPokemons.map((pokemon, index) => (
            <PokemonCard
              key={index}
              name={pokemon.name}
              url={pokemon.url}
              identification={index + 1}
            />
          ))}
        </div>
        <div className="flex justify-center py-5">
          <LoadButton onClick={loadPokemons} />
        </div>
      </div>
    </>
  );
}
