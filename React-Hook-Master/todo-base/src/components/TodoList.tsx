import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import { SetTodosType, TodosType } from '../store'


function TodoListItems({ todos, todosSet }: {
  todos: TodosType; todosSet: SetTodosType;
}) {
  return (
    <>
      {todos.map((todo: { id: number; text: string }) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox />
          <Input mx={2} value={todo.text} />
          <Button>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList({ todos, todosSet }: { todos: TodosType, todosSet: SetTodosType }) {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
