import { createContext } from "react";

const initalState = {
  first: "Jask",
  last: "Herrington",
};

export type UserState = typeof initalState;

const context = createContext<typeof initalState>(initalState);
//    function createContext<T: Type 타입>(
//    If you thought this should be optional, see
//    https://github.com/DefinitelyTyped/DefinitelyTyped/pull/24509#issuecomment-382213106
//    defaultValue: T,
//    ): Context<T>;

export default context;
