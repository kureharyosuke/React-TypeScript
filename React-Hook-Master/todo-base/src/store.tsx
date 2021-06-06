import * as React from "react";


export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];

// Native React implementation

// App.tsx에 있는 것을 store에 정의 : const  [ todos ,  todosSet ]  =  React . useState < Todo [ ] > ( [ ] ) ;

// export const useTodos = (initial: Todo[]) => React.useState<Todo[]>([]);
// CustomHooks 커스텀훅
const useTodos = (initial: Todo[]) => {
  const [todos, todosSet] = React.useState<Todo[]>(initial)
  const [newTodo, newTodoSet] = React.useState("");

  return {
    todos,
    newTodo,
    newTodoSet,
    addTodo() {
      todosSet(tl => addTodo(tl, newTodo))
      newTodoSet("");
    },
    updateTodo(id: number, text: string) {
      todosSet(tl => updateTodo(tl, id, text))
    },
    toggleTodo(id: number) {
      todosSet(tl => toggleTodo(tl, id))
    },
    removeTodo(id: number) {
      todosSet(tl => removeTodo(tl, id))
    },
    load(inTodos: Todo[]) {
      todosSet(inTodos)
    }
  }
}



// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// export type UseTodosType = ReturnType<typeof useTodos>; : export 사용할 필요가 없어짐, useTodosContext 로 통합되어 있기때문에
type UseTodosType = ReturnType<typeof useTodos>;

// export type TodosType = UseTodosType[0];
// export type SetTodosType = UseTodosType[1];

//# Custom Hooks TodosProvider & useContext

const TodoContext = React.createContext<UseTodosType | null>(null);

export const useTodosContext = () => React.useContext(TodoContext)!;

export const TodosProvider = ({ children }: { children: React.ReactNode }) => (
  <TodoContext.Provider value={useTodos([])}>{children}</TodoContext.Provider>
);

// Type

// /**
//  * Make all properties in T optional
//  */
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

// /**
//  * Make all properties in T required
//  */
// type Required<T> = {
//     [P in keyof T]-?: T[P];
// };

// /**
//  * Make all properties in T readonly
//  */
// type Readonly<T> = {
//     readonly [P in keyof T]: T[P];
// };

// /**
//  * From T, pick a set of properties whose keys are in the union K
//  */
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };

// /**
//  * Construct a type with a set of properties K of type T
//  */
// type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };

// /**
//  * Exclude from T those types that are assignable to U
//  */
// type Exclude<T, U> = T extends U ? never : T;

// /**
//  * Extract from T those types that are assignable to U
//  */
// type Extract<T, U> = T extends U ? T : never;

// /**
//  * Construct a type with the properties of T except for those in type K.
//  */
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// /**
//  * Exclude null and undefined from T
//  */
// type NonNullable<T> = T extends null | undefined ? never : T;

// /**
//  * Obtain the parameters of a function type in a tuple
//  */
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

// /**
//  * Obtain the parameters of a constructor function type in a tuple
//  */
// type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;

// /**
//  * Obtain the return type of a function type
//  */
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// /**
//  * Obtain the return type of a constructor function type
//  */
// type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;

// /**
//  * Convert string literal type to uppercase
//  */
// type Uppercase<S extends string> = intrinsic;

// /**
//  * Convert string literal type to lowercase
//  */
// type Lowercase<S extends string> = intrinsic;

// /**
//  * Convert first character of string literal type to uppercase
//  */
// type Capitalize<S extends string> = intrinsic;

// /**
//  * Convert first character of string literal type to lowercase
//  */
// type Uncapitalize<S extends string> = intrinsic;
