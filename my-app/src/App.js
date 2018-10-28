import React, { Component } from "react";
import "./App.css";
import ListItem from "./Components/ListItem/ListItem";
import Form from "./Components/Form/Form";
import NoItemsMessage from "./Components/NoItemsMessage/NoItemsMessage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { title: "Learn React", done: false, id: 1 },
        { title: "Show off new React skills", done: false, id: 2 },
        { title: "Put on cape", done: false, id: 3 },
        { title: "Fly around", done: false, id: 4 },
        { title: "Get arrested", done: false, id: 5 }
      ],
      newItem: { title: "" }
    };
  }

  onInput = e => {
    const input = e.target.value;
    const newItem = { title: input };
    this.setState({ newItem });
  };

  calculateId = () =>
    this.state.tasks.reduce((acc, val) => {
      acc = acc === undefined || val.id > acc ? val.id : acc;
      return acc;
    }, []) + 1;

  onSubmit = e => {
    e.preventDefault();
    const newTask = {
      title: this.state.newItem.title,
      done: false,
      id: this.calculateId()
    };
    const tasks = [...this.state.tasks, newTask];
    this.setState({ tasks, newItem: { title: "" } });
  };

  taskDone = item => {
    const newItems = this.state.tasks.map(task => {
      if (task.id === item.id) task.done = !task.done;
      return task;
    });
    this.setState({ tasks: newItems });
  };

  deleteItem = item => {
    const filtered = this.state.tasks.filter(task => task.id !== item.id);
    this.setState({ tasks: filtered });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <NoItemsMessage state={this.state} />
          <Form onSubmit={this.onSubmit} onInput={this.onInput} />
          {this.state.tasks.map(item => (
            <ListItem
              key={item.id}
              deleteItem={this.deleteItem}
              taskDone={this.taskDone}
              item={item}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
