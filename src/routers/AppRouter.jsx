import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonList } from "../components/PokemonList";
import { HomePage } from "../Pages/HomePage";
import { InformationPage } from "../Pages/InformationPage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<PokemonList />} />
        <Route path="/information/:pokemonId" element={<InformationPage />} />
      </Routes>
    </BrowserRouter>
  );
};
