/**
 *
 * API service module
 */

import { AllPokemons } from "@/types";
import axios from "axios";

export async function getAllPokemons(
  limit = 10,
  offset = 10
): Promise<AllPokemons> {
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar pokémons", error);
    throw error;
  }
}
