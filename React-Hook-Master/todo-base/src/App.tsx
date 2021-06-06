import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { useTodos } from './store'

export function App() {
  const [todos, todosSet] = useTodos([]);


  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar todosSet={todosSet} />
        <TodoList todos={todos} todoSet={todosSet} />
        <TodoAdd todoSet={todosSet} />
      </Box>
    </ChakraProvider>
  );
}
