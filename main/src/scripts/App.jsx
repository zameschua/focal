import React, { Component } from 'react';
//import './App.css';
//import Visuals from './visuals/Visuals';
//import Scheduler from './scheduler/Scheduler';
//import FileDownloader from './fileDownloader/FileDownloader';
import TodoListApp from './TodoList/components/TodoListApp';
import TemplatePanelComponent from './TemplatePanel/components/TemplatePanelComponent' // Temporary component

class App extends Component {
  render() {
    // Code to render the background image
    const imageURL = "https://s-media-cache-ak0.pinimg.com/originals/e7/e7/fe/e7e7fe1d5a22f73a73a8d5a9b729b568.jpg";

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
        {/* Start Left Column */}
        <div className="container col-md-3" style={{height:"100%"}}>
          <div className="row" style={{height:"50%"}}>
            <TemplatePanelComponent />
          </div>
          <div className="row" style={{height:"50%"}}>
            <TemplatePanelComponent />
          </div>
        </div>
        {/* End Left Column */}

        {/* Start Middle Column */}
        <div className="col-md-6 container">
          <div className="text-center">
            <h2 style={{color:"white"}}>HI CHEN KUANG</h2>
            <h1 style={{color:"white"}}>10 : 37</h1>
          </div>
          <TodoListApp/>
        </div>
        {/* End Middle Column */}

        {/* Start Right Column */}
        <div className="container col-md-3" style={{height:"100%"}}>
          <div className="row" style={{height:"50%"}}>
            <TemplatePanelComponent />
          </div>
          <div className="row" style={{height:"50%"}}>
            <TemplatePanelComponent />
          </div>
        </div>
        {/* End Right Column */}
      </div>
    );
  }
}

export default App;