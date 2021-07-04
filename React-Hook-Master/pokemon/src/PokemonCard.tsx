import React from "react";
import { Box } from "@fower/react";

import { Pokemon } from "./usePokemon"; // interface type 가져와야하는데, export interface

const PokemonCard: React.FunctionComponent<Pokemon> = ({
  name,
  type,
  base,
}) => (
  <Box
    text3XL
    p-10
    border-1
    borderGray500
    roundedXL
    grid
    gridTemplateColumns-2--md
    gridTemplateColumns-1--sm
    gap-10
  >
    <Box as="img" src={`/${name.english.toLowerCase()}.jpg`} w="100%" />
    <Box>
      <Box textXL fontBold>
        {name.english} new
      </Box>
      <Box textXL fontBold>
        {name.japanese}
      </Box>
      <Box textLG mt-10>
        {type.join(", ")}
      </Box>
      <Box grid gridTemplateColumns-2 gap-10 ml-20 mt-50>
        {Object.keys(base).map((k) => (
          <React.Fragment key={k}>
            <Box textSM fontBold>
              {k}
            </Box>
            <Box textSM>{base[k]}</Box>
          </React.Fragment>
        ))}
      </Box>
    </Box>
  </Box>
);

export default PokemonCard;
