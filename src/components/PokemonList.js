import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0#")
      .then((response) => response.json())
      .then((pokemons) => setPokemons(pokemons.results));
  }, []);

  const pokemonsList = pokemons?.map((pokemon, index) => (
    <li key={index}>
      <Link to="/information">{pokemon.name}</Link>
    </li>
  ));

  return <div className="">{pokemonsList}</div>;
};
