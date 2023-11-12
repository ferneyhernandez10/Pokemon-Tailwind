import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pokemonImage from "../image/pokemonImage.jpg";

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
    <div className="container mx-auto px-2 lg:px-8 ">
      <p className="text-4xl text-center font-bold capitalize">Pokemon List</p>
      <div className="flex flex-col justify-center xl:flex-row pb-4">
        <img src={pokemonImage} alt="Loading..." />
        <div className="flex flex-col">
          <h5 className="text-2xl font-medium">
            - Explanation of the pokemon page
          </h5>
          <p className="text-lg">
            This application is designed so that you can find at the beginning a
            list of one hundred Pokémon which has a search engine with
            functionality that depending on what you type, a select list of
            Pokémon appears. When you click on the name of the Pokémon you
            choose, it will be sent to another tab where you will find the name,
            the image, some of the characteristics that identify it, among them
            we can find: Skills, Movements, Statistics and Types.
          </p>
          <h5 className="text-2xl font-medium">
            - Explanation of the technologies that have been applied in the
            project
          </h5>
          <p className="text-lg">
            The technologies that have been used to create this project have
            been React with which we have brought the information from the
            hundred pokemon app and it has been put into functionality and with
            Tailwind CSS we have helped us with the design.
          </p>
        </div>
      </div>
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
    </div>
  );
};
