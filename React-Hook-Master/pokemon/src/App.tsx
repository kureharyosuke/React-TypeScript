import React, { useState } from "react";
import { Box } from "@fower/react";
import { styled } from "@fower/styled";

const Input = styled("input");

function App() {
  const [filter, setFilter] = useState("");

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
      {filter}
    </Box>
  );
}

export default App;
