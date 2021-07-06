import React, { useCallback } from "react";
import { Box } from "@fower/react";
import { styled } from "@fower/styled";

import usePokemon from "./usePokemon";
import PokemonCard from "./PokemonCard";

const Input = styled("input");

function App() {
  // const [count, setCount] = useState(1);
  const { filter, setFilter, pokemon, selectPokemon, selected } = usePokemon();

  // useEffect(() => {
  //   console.log("setFilter changed");
  // }, [setFilter]);
  // 1. useEffect로 리랜더링 확인 [버튼을 클릭할때마다, 리랜더링됨 ex) 24 App.tsx:14 Pokemon changed
  /**
   * @param usePokemon 에 const lcFilter, const pokemon을 useMemo를 감싸서, 변경되는 값, filter allPokemon(data)를 정의하니까, *버튼을 클릭할때마다, 리랜더링 안됨
   */
  // 2. usePokemon에 const lcFilter, const pokemon을 useMemo를 감싸서, 변경되는 값, filter allPokemon(data)를 정의하니까, *버튼을 클릭할때마다, 리랜더링 안됨

  // #event(evt) : type any = const onSetFilter = useCallback((evt) => setFilter(evt.target.value), []);
  const onSetFilter = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => setFilter(evt.target.value),
    [setFilter]
  );

  return (
    <Box p-10 maxW-1200 m="auto">
      {/* <button onClick={() => setCount(count + 1)}>Bump Count - {count}</button> */}
      {/* 1. useEffect로 리랜더링 확인  */}
      <h1>Hello Pokemon</h1>
      <Input
        p-5
        text4XL
        border-1
        roundedXL
        borderGray500
        w="100%"
        value={filter}
        onChange={onSetFilter}
      />
      {/* <h2>{filter}</h2> */}
      <Box>
        {pokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            {...pokemon}
            selected={selected.has(pokemon.name.english)}
            onSelected={selectPokemon}
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;

// 1. customhook 에서 받은 데이터를 pokemon

// 2. import usePokemon 해서 PokemonCard

// 3. PokemonCard에다가 pokemon props 넘겨준다.

// 4. props => selected={selected.has(pokemon.name.english)},  PokemonCard에 타입정의 =>  Pokemon & {  selected: boolean onSelected: (name: string) => void; }

// 5. props =>  onSelected={selectPokemon} PokemonCard에 타입정의 => Pokemon & {  selected: boolean onSelected: (name: string) => void; }
