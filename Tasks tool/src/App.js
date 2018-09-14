import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SingleTask from "./SingleTask";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      currentTask: ""
    };
  }

onInputChange = e => {
  this.setState({ currentTask: e.target.value });
}

onClick = () => {
  let tasksCopy = this.state.tasks.slice();
  tasksCopy.push(this.state.currentTask);

  this.setState({ tasks: tasksCopy, currentTask: "" });
}

deleteTask = i => {
  let tasksCopy = this.state.tasks.slice();
  tasksCopy.splice(i, 1);

  this.setState({ tasks: tasksCopy });
}

  render() {
    let bulletedTasks = this.state.tasks.map((e, i) => {
      return (
        <SingleTask task={e} delete={() => this.deleteTask(i)} />
        );
    });

    return (
      <div>
      <input placeholder="Taak invoeren" value={this.state.currentTask} onChange={this.onInputChange} />
      <button onClick={this.onClick}>Taak toevoegen</button>
      <br /><br />
      { this.state.tasks.length === 0 ? "Geen taken beschikbaar :)" : <ul>{bulletedTasks}</ul> }
      </div>
      );
  }
}

export default App;
