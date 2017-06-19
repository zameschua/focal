import React, { Component } from 'react';
//import './App.css';
//import Visuals from './visuals/Visuals';
//import Scheduler from './scheduler/Scheduler';
//import FileDownloader from './fileDownloader/FileDownloader';
import TodoListApp from './TodoList/components/TodoListApp';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Welcome to React</h2>
        <div>
          <TodoListApp/>
        </div>
      </div>
    );
  }
}

export default App;