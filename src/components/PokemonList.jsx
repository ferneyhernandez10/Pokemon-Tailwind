import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0#")
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons.results));
  }, []);

  const handleChange = (event) => {
    setPokemonSearch(event.target.value);
  };

  let leakedPokemonName = [];
  if (!pokemonSearch) {
    leakedPokemonName = pokemons;
  } else {
    leakedPokemonName = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(pokemonSearch.toLocaleLowerCase())
    );
  }

  const pokemonsList = leakedPokemonName?.map((pokemon, index) => (
    <div
      className="max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      key={index}
    >
      <Link
        className="w-96 text-center text-2xl font-medium capitalize"
        to={`/information/${pokemon.name}`}
      >
        <p className="">{pokemon.name}</p>
      </Link>
    </div>
  ));

  return (
    <>
      <input
        type="text"
        placeholder="Pokemon Search"
        value={pokemonSearch}
        onChange={handleChange}
        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <div className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-2 md:grid-cols-3 ">
        {pokemonsList}
      </div>
    </>
  );
};
