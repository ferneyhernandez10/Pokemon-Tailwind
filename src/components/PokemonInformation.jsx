import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  const skills = pokemonData?.abilities?.map((ability, index) => (
    <li className="list-decimal" key={index}>
      {ability.ability.name}
    </li>
  ));

  const movements = pokemonData?.moves?.map((move, index) => (
    <li className="list-decimal" key={index}>
      {move.move.name}
    </li>
  ));

  const statistics = pokemonData?.stats?.map((stat, index) => (
    <li className="list-decimal" key={index}>
      {stat.stat.name} - {stat.base_stat}
    </li>
  ));

  const guys = pokemonData?.types?.map((type, index) => (
    <li className="list-decimal" key={index}>
      {type.type.name}
    </li>
  ));

  useEffect(() => {
    getPokemonData();
  });

  return (
    <div className="flex flex-col flex-wrap justify-center items-center">
      <p className="text-lg font-medium capitalize">
        Pokemon {pokemonId} Information
      </p>
      <div className="flex">
        <img src={pokemonData?.sprites?.front_default} alt="Loading..." />
        <img src={pokemonData?.sprites?.back_default} alt="Loading..." />
      </div>
      <div className="border-2 border-solid border-black">
        <div className="border-b-2 border-black">
          <p className="text-base font-medium text-center uppercase">
            - Skills
          </p>
          {skills}
        </div>
        <div className="border-b-2 border-black">
          <p className="text-base font-medium text-center uppercase">
            - Movements
          </p>
          {movements}
        </div>
        <div className="border-b-2 border-black">
          <p className="text-base font-medium text-center uppercase">
            - Statistics
          </p>
          {statistics}
        </div>
        <div>
          <p className="text-base font-medium text-center uppercase">- Guys</p>
          {guys}
        </div>
      </div>
    </div>
  );
};
