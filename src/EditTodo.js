import React from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@material-ui/core";

function EditTodo({ id, updateTodo, task, toggle }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateTodo(id, value);
        reset();
        toggle();
      }}
    >
      <TextField
        margin="normal"
        fullWidth
        value={value}
        onChange={handleChange}
      />
    </form>
  );
}

export default EditTodo;
