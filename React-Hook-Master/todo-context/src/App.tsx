import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
// import { useTodos } from './store'
import { TodosProvider } from './store'

export function App() {
  // const [todos, todosSet] = React.useState<Todo[]>([]); -> Store로 이동 
  // const [todos, todosSet] = useTodos([]);


  return (
    <ChakraProvider theme={theme}>
      <TodosProvider>
        {/* Property 'children' is missing in type '{}' but required in type '{ children: ReactNode; }'. */}
        <Box maxWidth="8xl" margin="auto" p={5}>
          {/* <TopBar todosSet={todosSet} /> */}
          <TopBar />
          {/* <TodoList todos={todos} todosSet={todosSet} /> */}
          <TodoList />
          {/* <TodoAdd todos={todos} todosSet={todosSet} /> */}
          <TodoAdd />
        </Box>
      </TodosProvider>
    </ChakraProvider >
  );
}
