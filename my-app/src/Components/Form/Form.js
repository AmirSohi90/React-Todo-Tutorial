import React from "react";

const Form = props => (
  <form onSubmit={e => props.onSubmit(e)}>
    <input placeholder="Task" onChange={props.onInput} />
    <button type="submit"> Add Task </button>
  </form>
);

export default Form;
