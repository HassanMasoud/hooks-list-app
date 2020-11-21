import React from "react";
import Todo from "./Todo";
import { Paper, List, Divider } from "@material-ui/core";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map((todo) => (
          <>
            <Todo task={todo.task} completed={todo.completed} key={todo.id} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TodoList;
