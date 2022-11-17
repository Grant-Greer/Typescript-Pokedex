import React from "react";
import StyledHeader from "./styles/Header.styled";
import PokeBall from "./PokeBall";
const Header = ({ children }) => (
  <StyledHeader>
    <h1>
      <PokeBall />
      Pokedex
    </h1>
    <p>
      Welcome to the Pokédex challenge! The goal is to build out the UI from
      this Figma. Then you'll make a request to the pokéapi endpoint to populate
      it with the data you receive.
    </p>
    {children}
  </StyledHeader>
  
);

export default Header;
