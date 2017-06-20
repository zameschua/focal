import React, { Component } from 'react';
//import './App.css';
//import Visuals from './visuals/Visuals';
//import Scheduler from './scheduler/Scheduler';
//import FileDownloader from './fileDownloader/FileDownloader';
import TodoListApp from './TodoList/components/TodoListApp';

class App extends Component {
  render() {
    // Code to render the background image
    const imageURL = "https://static.pexels.com/photos/296282/pexels-photo-296282.jpeg";

    const backgroundImageStyle = {
      background: `url(${imageURL})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      height: "100vh",
    };

    return (
      <div className="App container-fluid" style={backgroundImageStyle}> {/* Attatch background image */}
        <h2>Welcome to React</h2>
        <div>
          { /* <TodoListApp/> */ }
        </div>
      </div>
    );
  }
}

export default App;