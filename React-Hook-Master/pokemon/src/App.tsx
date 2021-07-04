import React, { useState, useEffect } from "react";
import { Box } from "@fower/react";
import { styled } from "@fower/styled";

interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
  };
  type: string[];
  base: Record<string, number>;
}

const Input = styled("input");

function App() {
  const [filter, setFilter] = useState<string>("");
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((resp) => resp.json())
      .then((pokemon: Pokemon[]) => setAllPokemon(pokemon)); // setAllPokemon(pokemon) 파라미터를 감싸주고,
  }, []);

  // 검색바(Search Bar) filter로 english 이름만 필터하고,
  const lcFilter = filter.toLowerCase();
  const pokemon = allPokemon
    .filter(({ name: { english } }) => english.toLowerCase().includes(lcFilter))
    .slice(0, 10); // 검색수를 0번에서 10번까지

  return (
    <Box p-10 maxW-1200 m="auto">
      <h1>Hello Pokemon</h1>
      <Input
        p-5
        text4XL
        border-1
        roundedXL
        borderGray500
        w="100%"
        value={filter}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          setFilter(evt.target.value)
        }
      />
      {/* <h2>{filter}</h2> */}
      <Box>
        {pokemon.map((pokemon) => (
          <Box key={pokemon.id} text3XL>
            {pokemon.name.english}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default App;
