import React, { useState, useEffect } from "react";
import { Box } from "@fower/react";
import { styled } from "@fower/styled";

import usePokemon from "./usePokemon";

const Input = styled("input");

function App() {
  const [count, setCount] = useState(1);
  const { filter, setFilter, pokemon } = usePokemon();

  useEffect(() => {
    console.log("Pokemon changed");
  }, [pokemon]);

  return (
    <Box p-10 maxW-1200 m="auto">
      <button onClick={() => setCount(count + 1)}>Bump Count - {count}</button>
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
