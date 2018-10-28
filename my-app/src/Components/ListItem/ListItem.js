import React from "react";

const ListItem = props => (
  <div style={{ display: "flex" }}>
    <h1
      onClick={() => props.taskDone(props.item)}
      style={{
        textDecoration: props.item.done ? "line-through" : "none"
      }}
    >
      {props.item.title}
    </h1>
    <h1 onClick={() => props.deleteItem(props.item)}> x </h1>
  </div>
);
export default ListItem;
