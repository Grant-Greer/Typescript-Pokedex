import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Pokedex from "./containers/Pokedex";
import PokemonInfoCard from "./components/PokemonInfoCard";
import GlobalStyle from "./global";
const App = () => (
  <Routes>
    <GlobalStyle />
    <Route path="/" element={<Pokedex />} />
    <Route path="/pokemon/:pokemonId" element={<PokemonInfoCard />} />
  </Routes>
);

export default App;
