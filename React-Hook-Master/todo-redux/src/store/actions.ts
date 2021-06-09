import { Todo } from "./types";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_NEWTODO = "SET_NEWTODO";
export const SET_TODOS = "SET_TODOS";

export type ActionTypes =
  | { type: typeof SET_TODOS; payload: Todo[] }
  | { type: typeof ADD_TODO }
  | { type: typeof DELETE_TODO; payload: number }
  | {
      type: typeof UPDATE_TODO;
      payload: {
        id: number;
        text: string;
      };
    }
  | { type: typeof TOGGLE_TODO; payload: number }
  | { type: typeof SET_NEWTODO; payload: string };
