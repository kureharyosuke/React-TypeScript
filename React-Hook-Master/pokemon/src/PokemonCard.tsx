import React from "react";
import { Box } from "@fower/react";

import { Pokemon } from "./usePokemon"; // interface type 가져와야하는데, export interface

// const PokemonCard = ({name, type, base}:Pokemon) => ()

const PokemonCard: React.FunctionComponent<
  Pokemon & {
    selected: boolean;
    onSelected: (name: string) => void;
  }
> = ({ name, type, base, selected, onSelected }) => (
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
      <Box grid gridTemplateColumns-2 gap-10>
        <Box>
          <Box textXL fontBold>
            {name.english} new
          </Box>
          <Box textXL fontBold>
            {name.japanese}
          </Box>
        </Box>
        <Box>
          <button onClick={() => onSelected(name.english)}>
            {selected ? "Selected" : "Not Selected"}
          </button>
        </Box>
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
