import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";
import { DispatchContext } from "./contexts/todos.context";

function EditTodo({ id, task, toggle }) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE", id: id, newTask: value });
        reset();
        toggle();
      }}
      style={{ margin: "0 1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        fullWidth
        value={value}
        onChange={handleChange}
        autoFocus
      />
    </form>
  );
}

export default EditTodo;
