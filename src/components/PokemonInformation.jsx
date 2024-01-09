import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetDataPokemonTypes } from "./GetDataPokemonTypes";
import { PokemonImageModal } from "./PokemonImageModal";
import { useModal } from "../hooks/useModal";
import { InformationModal } from "./InformationModal";

export const PokemonInformation = () => {
  const [pokemonData, setPokemonData] = useState({});
  const { pokemonId } = useParams();
  const [activeIndex, setActiveIndex] = useState(1);
  const [isOpenImageModal, openImageModal, closeImageModal] = useModal(false);
  const [isOpenInformationModal, openInformationModal, closeInformationModal] =
    useModal(false);
  const [urlModal, setUrlModal] = useState("");

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  const getPokemonData = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const data = await response.json();
    setPokemonData(data);
  };

  const openModal = (url) => {
    setUrlModal(url);
    openInformationModal();
  };

  const skills = pokemonData?.abilities?.map((ability, index) => (
    <li
      key={index}
      className={`text-[#1976D2] dark:text-[#1976D2] hover:underline list-decimal ${
        activeIndex === 1 ? "" : "hidden"
      }`}
    >
      <Link onClick={() => openModal(ability.ability.url)}>
        {ability.ability.name}
      </Link>
    </li>
  ));

  const movements = pokemonData?.moves?.map((move, index) => (
    <li
      key={index}
      className={`text-[#1976D2] dark:text-[#1976D2] hover:underline list-decimal ${
        activeIndex === 2 ? "" : "hidden"
      }`}
    >
      <Link onClick={() => openModal(move.move.url)}>{move.move.name}</Link>
    </li>
  ));

  const statistics = pokemonData?.stats?.map((stat, index) => (
    <li
      key={index}
      className={`list-decimal ${activeIndex === 3 ? "" : "hidden"}`}
    >
      {stat.stat.name} - {stat.base_stat}
    </li>
  ));

  const guys = pokemonData?.types?.map((type, index) => (
    <li
      key={index}
      className={`list-decimal ${activeIndex === 4 ? "" : "hidden"}`}
    >
      {type.type.name}
    </li>
  ));

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
        <div
          className="flex justify-center mt-1 cursor-pointer hover:bg-gray-100"
          onClick={openImageModal}
        >
          <img
            className="w-[300px] h-[300px]  "
            src={pokemonData?.sprites?.front_default}
            alt="Loading..."
          />
          {/* <img src={pokemonData?.sprites?.back_default} alt="Loading..." /> */}
        </div>
        <PokemonImageModal
          pokemonData={pokemonData}
          isOpen={isOpenImageModal}
          closeModal={closeImageModal}
        />
        <div className="border-b">
          <div className="flex flex-wrap justify-between text-sm font-medium text-center text-[#00000099] border-b border-black">
            <button
              onClick={() => handleClick(1)}
              className={`py-3 px-5 ${checkActive(
                1,
                "border-b-2 border-[#1976d2] text-[#1976d2]"
              )}`}
            >
              <p className="uppercase">Abilities</p>
            </button>
            <button
              onClick={() => handleClick(2)}
              className={`py-3 px-5 ${checkActive(
                2,
                "border-b-2 border-[#1976d2] text-[#1976d2]"
              )}`}
            >
              <p className="uppercase">Moves</p>
            </button>
            <button
              onClick={() => handleClick(3)}
              className={`py-3 px-5 ${checkActive(
                3,
                "border-b-2 border-[#1976d2] text-[#1976d2]"
              )}`}
            >
              <p className="uppercase">Stats</p>
            </button>
            <button
              onClick={() => handleClick(4)}
              className={`py-3 px-5 ${checkActive(
                4,
                "border-b-2 border-[#1976d2] text-[#1976d2]"
              )}`}
            >
              <p className="uppercase">Types</p>
            </button>
          </div>
        </div>
        <div>
          <div className="p-6">
            {skills}
            {movements}
            <InformationModal
              isOpen={isOpenInformationModal}
              closeModal={closeInformationModal}
              urlModal={urlModal}
            />
            {statistics}
            {guys}
          </div>
        </div>
      </div>
    </div>
  );
};
