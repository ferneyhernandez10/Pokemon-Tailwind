import React, { useEffect, useState } from "react";

export const PokemonInformation = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const skills = data?.abilities?.map((ability, index) => (
    <div key={index}>{ability.ability.name}</div>
  ));

  const movements = data?.moves?.map((move, index) => (
    <div key={index}>{move.move.name}</div>
  ));

  const statistics = data?.stats?.map((stat, index) => (
    <div key={index}>
      {stat.stat.name} - {stat.base_stat}
    </div>
  ));

  const guys = data?.types?.map((type, index) => (
    <div key={index}>{type.type.name}</div>
  ));
  return (
    <>
      PokemonInformation
      <h1>- Skills</h1>
      {skills}
      <h1>- Movements</h1>
      {movements}
      <h1>- Statistics</h1>
      {statistics}
      <h1>- Guys</h1>
      {guys}
    </>
  );
};
