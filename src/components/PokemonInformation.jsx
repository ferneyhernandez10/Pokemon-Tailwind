import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetDataPokemonTypes } from "./GetDataPokemonTypes";
import { PokemonDataTabs } from "./PokemonDataTabs";
import { PokemonImage } from "./PokemonImage";

export const PokemonInformation = () => {
  const [pokemonData, setPokemonData] = useState({});
  const { pokemonId } = useParams();

  const getPokemonData = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const data = await response.json();
    setPokemonData(data);
  };

  useEffect(() => {
    getPokemonData();
  });

  return (
    <div className="bg-[#0000ff] flex flex-wrap justify-center items-center min-h-screen">
      <div className="w-full max-w-sm p-4 m-12 bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
        <p className="text-5xl font-medium capitalize">{pokemonId}</p>
        <div className="mt-2 space-x-2 ">
          <GetDataPokemonTypes typesOfPokemon={pokemonData} />
        </div>
        <PokemonImage pokemonData={pokemonData} />
        <PokemonDataTabs pokemonData={pokemonData} />
      </div>
    </div>
  );
};
