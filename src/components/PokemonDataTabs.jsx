import React, { useState } from "react";
import { GetTabData } from "./GetTabData";

export const PokemonDataTabs = ({ pokemonData }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const abilities = (
    <button
      onClick={() => handleClick(1)}
      className={`py-3 px-5 ${checkActive(
        1,
        "border-b-2 border-[#1976d2] text-[#1976d2]"
      )}`}
    >
      <p className="uppercase">Abilities</p>
    </button>
  );

  const moves = (
    <button
      onClick={() => handleClick(2)}
      className={`py-3 px-5 ${checkActive(
        2,
        "border-b-2 border-[#1976d2] text-[#1976d2]"
      )}`}
    >
      <p className="uppercase">Moves</p>
    </button>
  );

  const stats = (
    <button
      onClick={() => handleClick(3)}
      className={`py-3 px-5 ${checkActive(
        3,
        "border-b-2 border-[#1976d2] text-[#1976d2]"
      )}`}
    >
      <p className="uppercase">Stats</p>
    </button>
  );

  const types = (
    <button
      onClick={() => handleClick(4)}
      className={`py-3 px-5 ${checkActive(
        4,
        "border-b-2 border-[#1976d2] text-[#1976d2]"
      )}`}
    >
      <p className="uppercase">Types</p>
    </button>
  );

  return (
    <>
      <div className="border-b">
        <div className="flex flex-wrap justify-between text-sm font-medium text-center text-[#00000099] border-b border-black">
          {abilities}
          {moves}
          {stats}
          {types}
        </div>
      </div>
      <div>
        <div className="p-6">
          <GetTabData pokemonData={pokemonData} activeIndex={activeIndex} />
        </div>
      </div>
    </>
  );
};
