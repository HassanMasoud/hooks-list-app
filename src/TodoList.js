import React, { useContext } from "react";
import Todo from "./Todo";
import { Paper, List, Divider } from "@material-ui/core";
import { TodosContext } from "./contexts/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <Todo
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                key={todo.id}
              />
              {i < todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
