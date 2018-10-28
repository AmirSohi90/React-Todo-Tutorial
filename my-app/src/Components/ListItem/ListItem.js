import React from "react";

const ListItem = props => (
  <ul>
    <li
      style={{
        display: "flex",
        textDecoration: props.item.done ? "line-through" : "none"
      }}
    >
      <h1 onClick={() => props.taskDone(props.item)}>{props.item.title}</h1>
      <h1 onClick={() => props.deleteItem(props.item)}> x </h1>
    </li>
  </ul>
);
export default ListItem;
