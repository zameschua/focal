import React, { Component } from 'react';
import TodoListApp from './TodoList/components/TodoListApp';
import TemplatePanelComponent from './TemplatePanel/components/TemplatePanelComponent'; // Temporary component
import TimeTrackerMain from './TimeTracker/components/TimeTrackerMain';

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
      overflow: "hidden"
    };

    return (
      <div className="App container-fluid" style={backgroundImageStyle}> {/* Attatch background image */}
        <div className="row h-100">
          
          <div className="col-3">
            <div className="container" style={{paddingTop: "5%"}}>
              <div className="row">
                <TemplatePanelComponent />
              </div>
              <div className="row">
                <TemplatePanelComponent />
              </div>
              <div className="row">
                <TemplatePanelComponent />
              </div>
              <div className="row">
                <TemplatePanelComponent />
              </div>
              <div className="row">
                <TemplatePanelComponent />
              </div>
              <div className="row">
                <TemplatePanelComponent />
              </div>
            </div>
          </div>



          <div className="col-6 align-self-center">
            <div className="text-center">
              <h2 style={{color:"white"}}>HI CHEN KUANG</h2>
              <h1 style={{color:"white"}}>10 : 37</h1>
            </div>
            <TodoListApp/>
          </div>



          <div className="col-3">
            <div className="container" style={{paddingTop: "5%"}}>
              <div className="row">
                <TemplatePanelComponent />
              </div>
              <div className="row">
                <TimeTrackerMain />
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default App;