import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonList } from "../components/PokemonList";
import { PokemonInformation } from "../components/PokemonInformation";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/list" element={<PokemonList />} />
        <Route
          path="/information/:pokemonId"
          element={<PokemonInformation />}
        />
      </Routes>
    </BrowserRouter>
  );
};

