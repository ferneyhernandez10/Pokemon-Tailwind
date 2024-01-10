import React from "react";
import pokemonImage from "../image/pokemonImage.jpg";
import { PokemonList } from "../components/PokemonList";
import { ApplicationDescription } from "../components/ApplicationDescription";

export const HomePage = () => {
  return (
    <div className="container mx-auto px-2 lg:px-8 ">
      <p className="text-4xl text-center font-bold capitalize">Pokemon List</p>
      <div className="flex flex-col justify-center xl:flex-row pb-4">
        <img src={pokemonImage} alt="Loading..." />
        <ApplicationDescription />
      </div>
      <PokemonList />
    </div>
  );
};
