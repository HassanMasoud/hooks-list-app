import React, { useContext, memo } from "react";
import EditTodo from "./EditTodo";
import useToggleState from "./hooks/useToggleState";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { DispatchContext } from "./contexts/todos.context";

function Todo({ id, task, completed }) {
  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useContext(DispatchContext);
  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodo task={task} id={id} toggle={toggle} />
      ) : (
        <>
          <Checkbox
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggle}>
              <Edit />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id: id })}
            >
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Todo);
