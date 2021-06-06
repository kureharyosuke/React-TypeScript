import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
// import {
//   useTodosContext,
//   toggleTodo,
//   updateTodo,
//   removeTodo,
// } from "../store";
import { useTodosContext } from '../store';

function TodoListItems(
  //   {
  //   todos,
  //   todosSet,
  // }: {
  //   todos: TodosType;
  //   todosSet: SetTodosType;
  //   }
) {
  // const [todos, todosSet] = useTodosContext()
  const { todos, updateTodo, toggleTodo, removeTodo } = useTodosContext();

  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>

          {/* ------------------------------------- Checkbox ------------------------------------- */}

          {/* <Checkbox onClick={() => todosSet(toggleTodo(todos, todo.id))} /> */}
          {/* store.tsx : toggleTodo */}

          {/* export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
            todos.map((todo) => ({
              ...todo,
              done: todo.id === id ? !todo.done : todo.done,
            })); */}

          <Checkbox onClick={() => toggleTodo(todo.id)} />

          {/* ------------------------------------- INPUT ------------------------------------- */}
          {/* <Input
            mx={2}
            value={todo.text}
            onChange={(evt) =>
              todosSet(updateTodo(todos, todo.id, evt.target.value))
            }
          /> */}
          {/* store.tsx : updateTodo */}

          {/* export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
            todos.map((todo) => ({
              ...todo,
              text: todo.id === id ? text : todo.text,
            })); */}
          <Input
            mx={2}
            value={todo.text}
            onChange={(evt) =>
              updateTodo(todo.id, evt.target.value)
            }
          />

          {/* ------------------------------------- Button ------------------------------------- */}

          {/* <Button onClick={() => todosSet(removeTodo(todos, todo.id))}>
            Delete
          </Button> */}
          {/* store.tsx : removeTodo */}

          {/* export const removeTodo = (todos: Todo[], id: number): Todo[] =>
           todos.filter((todo) => todo.id !== id); */}

          <Button onClick={() => removeTodo(todo.id)}>
            Delete
          </Button>

        </Flex>
      ))
      }
    </>
  );
}

function TodoList(
  //   {
  //   todos,
  //   todosSet,
  // }: {
  //   todos: TodosType;
  //   todosSet: SetTodosType;
  //   }
) {
  return (
    <>
      <Heading>Todo List</Heading>
      {/* <TodoListItems todos={todos} todosSet={todosSet} /> */}
      <TodoListItems />
    </>
  );
}

export default TodoList;
