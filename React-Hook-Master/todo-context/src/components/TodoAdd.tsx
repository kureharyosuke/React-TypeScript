import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useTodosContext, addTodo } from "../store";

function TodoAdd() {
  //   {
  //   todos,
  //   todosSet,
  // }: {
  //   todos: TodosType;
  //   todosSet: SetTodosType;
  //   }
  // const [newTodo, newTodoSet] = React.useState("");
  // const [todos, todosSet] = useTodosContext();
  const { newTodo, newTodoSet, addTodo } = useTodosContext();

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newTodo}
        onChange={(evt) => newTodoSet(evt.target.value)}
      />
      {/* event.target.value　상태값을 보존하고,  */}
      {/* <Button
        onClick={() => {
          todosSet(addTodo(todos, newTodo));
          newTodoSet("");
        }}
      >
        Add Todo
      </Button> */}
      <Button
        onClick={() => {
          addTodo();
        }}
      >
        Add Todo
      </Button>
    </Grid>
  );
}

export default TodoAdd;
