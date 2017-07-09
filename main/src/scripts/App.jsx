import React, { Component } from 'react';
import TodoListApp from './TodoList/components/TodoListApp';
import TemplatePanelComponent from './TemplatePanel/components/TemplatePanelComponent'; // Temporary component
import TimeTrackerMain from './TimeTracker/components/TimeTrackerMain';
import WelcomeCard from './WelcomeCard/containers/WelcomeCard';
import EventsFeed from './EventsFeed/containers/EventsFeed';

class App extends Component {
  render() {
    // Code to render the background image
    // TODO: Cache the image
    // Add /daily to end of url so that the image is only queried once a day
    // Refer to https://source.unsplash.com/
    const imageURL = "http://i.imgur.com/0ul4vJS.jpg";
    
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
              <EventsFeed />
            </div>
          </div>



          <div className="col-6 align-self-center">
            <div className="text-center">
              <WelcomeCard />
            </div>
            
          </div>



          <div className="col-3">
            <div className="container" style={{paddingTop: "5%"}}>
              <div className="row">
                <TimeTrackerMain />
              </div>
              <div className="row">
                <TodoListApp/>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }
}

export default App;