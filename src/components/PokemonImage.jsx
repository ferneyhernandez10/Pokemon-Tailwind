import React from "react";
import { useModal } from "../hooks/useModal";
import { PokemonImageModal } from "./PokemonImageModal";

export const PokemonImage = ({ pokemonData }) => {
  const [isOpenImageModal, openImageModal, closeImageModal] = useModal(false);
  return (
    <>
      <div
        className="flex justify-center mt-1 cursor-pointer hover:bg-gray-100"
        onClick={openImageModal}
      >
        <img
          className="w-[300px] h-[300px]  "
          src={pokemonData?.sprites?.front_default}
          alt="Loading..."
        />
      </div>
      <PokemonImageModal
        pokemonData={pokemonData}
        isOpen={isOpenImageModal}
        closeModal={closeImageModal}
      />
    </>
  );
};
