import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import StyledTileContainer from "../components/styles/TileContainer.styled";
import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import PageNav from "../components/PageNav";
import StyledButton from "../components/styles/Button.styled";
import { getPokemons } from "../services/getPokemons";

export const Pokedex = () => {
  const [offSet, setOffSet] = useState(0);
  const queryClient = useQueryClient();

  useEffect(() => {
    const nextPage = offSet + 9;
    queryClient.prefetchQuery(["pokemons", nextPage], () =>
      getPokemons(nextPage)
    );
  }, [offSet, queryClient]);

  interface Api {
    returnData: [
      count: number,
      next: string,
      previous: string,
      results: [{ name: string; url: string }]
    ];
    error: {};
  }

  const { isLoading, isError, isSuccess, error, data } = useQuery(
    ["pokemons", offSet],
    () => getPokemons(offSet),
    { staleTime: Infinity, keepPreviousData: true }
  );

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return (
      <>
        <h3>Oops, Something went wrong!</h3>
        <p>{error.toString()}</p>
      </>
    );
  }

  if (isSuccess) {
    let num = offSet + 1;
    const pokemonData = data.returnData[3];
    return (
      <>
        <Header>
          <PageNav>
            <StyledButton
              disabled={offSet == 0}
              onClick={() => {
                setOffSet((prev) => prev - 9);
              }}
            >
              Previous
            </StyledButton>
            <StyledButton
              onClick={() => {
                setOffSet((prev) => prev + 9);
              }}
            >
              Next
            </StyledButton>
          </PageNav>
        </Header>

        <StyledTileContainer>
          {pokemonData &&
            pokemonData.map((pokemon: { name: string; url: string }) => (
              <PokemonCard key={pokemon.url} pokemon={pokemon} image={num++} />
            ))}
        </StyledTileContainer>
      </>
    );
  } else {
    return null;
  }
};

export default Pokedex;
