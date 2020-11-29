import { createContext, useReducer } from "react";
import todosReducer from "../reducers/todos.reducer";

const defaultTodos = [
  { id: 1, task: "Walk the dog", completed: false },
  { id: 2, task: "Grow a beard", completed: true },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todosReducer, defaultTodos);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
