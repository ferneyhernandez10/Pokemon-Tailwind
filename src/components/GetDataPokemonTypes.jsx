import React from "react";

export const GetDataPokemonTypes = ({ typesOfPokemon }) => {
  return (
    <>
      {typesOfPokemon?.types?.map((type, index) => (
        <kbd
          className="px-2 py-1.5 text-xs capitalize font-medium text-gray-800 bg-[#00000014] rounded-full"
          key={index}
        >
          {type.type.name}
        </kbd>
      ))}
    </>
  );
};
