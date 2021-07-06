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

  const [selected, setSelected] = useState<Set<string>>(new Set());

  return {
    pokemon,
    filter: filter,
    setFilter,
    selected,
  };
}
