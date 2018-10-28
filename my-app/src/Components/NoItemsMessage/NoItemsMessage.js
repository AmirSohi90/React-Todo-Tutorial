import React from "react";

const NoItemsMessage = props => {
  return (
    props.state.tasks.length === 0 && <h1>ADD ITEMS TO THE LIST PLEASE</h1>
  );
};

export default NoItemsMessage;
