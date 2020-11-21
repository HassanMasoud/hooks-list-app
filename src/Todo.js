import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

function Todo({ task, completed }) {
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
        <IconButton aria-label="Delete">
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Todo;
