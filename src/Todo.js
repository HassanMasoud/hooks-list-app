import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

function Todo({ id, task, completed, removeTodo }) {
  return (
    <ListItem>
      <Checkbox checked={completed} />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Edit">
          <Edit />
        </IconButton>
        <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
