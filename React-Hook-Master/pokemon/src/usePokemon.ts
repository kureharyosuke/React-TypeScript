import { useState, useEffect, useMemo, useCallback } from "react";

export interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
  };
  type: string[];
  base: Record<string, number>;
}

export default function usePokemon(): {
  pokemon: Pokemon[];
  filter: string;
  setFilter: (filter: string | ((filter: string) => string)) => void;
  selected: Set<string>;
  selectPokemon: (name: string) => void;
} {
  const [filter, setFilter] = useState<string>("");
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((resp) => resp.json())
      .then((pokemon: Pokemon[]) => setAllPokemon(pokemon)); // setAllPokemon(pokemon) 파라미터를 감싸주고,
  }, []);

  const pokemon = useMemo(() => {
    // 검색바(Search Bar) filter로 english 이름만
    const lcFilter = filter.toLowerCase();
    return allPokemon
      .filter(({ name: { english } }) =>
        english.toLowerCase().includes(lcFilter)
      )
      .slice(0, 10); // 검색수를 0번에서 10번까지
  }, [filter, allPokemon]);

  // Set() 대한 타입을 제너릭 타입으로 정의
  const [selected, setSelected] = useState<Set<string>>(new Set());

  // SelectPokemon 선택한 포켓몬의 함수
  const selectPokemon = useCallback((name: string) => {
    setSelected((currentSet) => {
      const newSet = new Set(currentSet);
      if (currentSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  }, []);

  return {
    pokemon,
    filter: filter,
    setFilter,
    selected,
    selectPokemon,
  };
}
