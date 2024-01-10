import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import { InformationModal } from "./InformationModal";
import { Link } from "react-router-dom";

export const GetTabData = ({ pokemonData, activeIndex }) => {
  const [isOpenInformationModal, openInformationModal, closeInformationModal] =
    useModal(false);
  const [urlModal, setUrlModal] = useState("");

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

  return (
    <>
      {skills}
      {movements}
      {statistics}
      {guys}
      <InformationModal
        isOpen={isOpenInformationModal}
        closeModal={closeInformationModal}
        urlModal={urlModal}
      />
    </>
  );
};
