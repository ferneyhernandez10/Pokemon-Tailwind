import React from "react";

export const PokemonImageModal = ({ pokemonData, isOpen, closeModal }) => {
  const sprites = {
    back_default: pokemonData?.sprites?.back_default,
    back_female: pokemonData?.sprites?.back_female,
    back_shiny: pokemonData?.sprites?.back_shiny,
    back_shiny_female: pokemonData?.sprites?.back_shiny_female,
    front_default: pokemonData?.sprites?.front_default,
    front_female: pokemonData?.sprites?.front_female,
    front_shiny: pokemonData?.sprites?.front_shiny,
    front_shiny_female: pokemonData?.sprites?.front_shiny_female,
    other_dream_world_front_default:
      pokemonData?.sprites?.other.dream_world.front_default,
    other_dream_world_front_female:
      pokemonData?.sprites?.other.dream_world.front_female,
    other_home_front_default: pokemonData?.sprites?.other.home.front_default,
    other_home_front_female: pokemonData?.sprites?.other.home.front_female,
    other_home_front_shiny: pokemonData?.sprites?.other.home.front_shiny,
    other_home_front_shiny_female:
      pokemonData?.sprites?.other.home.front_shiny_female,
    other_official_artwork_front_default:
      pokemonData?.sprites?.other["official-artwork"].front_default,
    other_official_artwork_front_shiny:
      pokemonData?.sprites?.other["official-artwork"].front_shiny,
  };

  const pokemonImageGallery = Object.entries(sprites).filter(
    (value) => value[1]
  );

  const handleModalClick = (e) => e.stopPropagation();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 border-2 border-black w-1/2 h-[95%]"
            onClick={handleModalClick}
          >
            <div className="grid grid-cols-1 gap-1 h-full overflow-y-auto sm:grid-cols-2">
              {pokemonImageGallery.map((imageGallery, index) => (
                <div key={index}>
                  <img
                    className="w-full 2xl:h-60"
                    src={imageGallery[1]}
                    alt="Loading..."
                  />
                  <p className="w-full py-3 px-4 bg-slate-400 text-sm text-white text-ellipsis overflow-hidden">
                    {imageGallery[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
