import React from "react";

const ListItem = props => (
  <ul>
    <li
      style={{
        display: "flex"
      }}
    >
      <h1
        style={{ textDecoration: props.item.done ? "line-through" : "none" }}
        onClick={() => props.taskDone(props.item)}
      >
        {props.item.title}
      </h1>
      <h1 onClick={() => props.deleteItem(props.item)}>-Delete</h1>
    </li>
  </ul>
);
export default ListItem;
