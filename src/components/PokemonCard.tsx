import React from "react";
import StyledPokemonCard from "./styles/PokemonCard.styled";
import { NavLink } from "react-router-dom";
import { capitalize, padNumber } from "../services/utilFunctions";

interface pokemonProps {
  name: string;
  url: string;
}

export const PokemonCard = (pokemon: pokemonProps, image: number) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${image}.png`;

  if (image <= 250) {
    return (
      <StyledPokemonCard>
        <NavLink
          className="no-underline"
          to={{ pathname: `/pokemon/${pokemon.name}` }}
        >
          <img src={imageUrl} alt={pokemon.name} />
          <span>#{padNumber(image, 3)}</span>
          <h2>{capitalize(pokemon.name)}</h2>
        </NavLink>
      </StyledPokemonCard>
    );
  } else {
    return null;
  }
};

export default PokemonCard;
