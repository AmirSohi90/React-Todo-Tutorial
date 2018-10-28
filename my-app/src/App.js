import React, { Component } from "react";
import "./App.css";
import ListItem from "./Components/ListItem/ListItem";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { title: "This", done: false, id: 1 },
        { title: "That", done: false, id: 2 },
        { title: "Something", done: false, id: 3 },
        { title: "Who?", done: false, id: 4 },
        { title: "What?!", done: false, id: 5 }
      ],
      newItem: { title: "" }
    };
  }

  onInput = e => {
    const input = e.target.value;
    const newItem = { title: input };
    this.setState({ newItem });
  };

  calculateId = () => {
    const newId = this.state.tasks.reduce((acc, val) => {
      acc[0] = acc[0] === undefined || val.id < acc[0] ? val.id : acc[0];
      acc[1] = acc[1] === undefined || val.id > acc[1] ? val.id : acc[1];
      return acc;
    }, []);
    return newId[1] + 1;
  };

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
          <form onSubmit={e => this.onSubmit(e)}>
            <input placeholder="Task" onChange={this.onInput} />
            <button type="submit"> Add Task </button>
          </form>
          {this.state.tasks.map(item => (
            <ListItem
              key={item.id}
              deleteItem={this.deleteItem}
              onInput={this.onInput}
              onSubmit={this.onSubmit}
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
