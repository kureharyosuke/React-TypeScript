import React from "react";
import { Box } from "@fower/react";

function App() {
  return (
    <Box p-10 maxW-1200 m="auto">
      <h1>Hello Pokemon</h1>
      <Box as="input" p-5 text4XL border-1 roundedXL borderGray500 w="100%" />
    </Box>
  );
}

export default App;
