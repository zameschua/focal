import React, {  Component  } from 'react';
import {  connect  } from 'react-redux';

import TodoListApp from './TodoList/components/TodoListApp';
import TemplatePanelComponent from './TemplatePanel/components/TemplatePanelComponent'; // Temporary component
import TimeTrackerMain from './TimeTracker/components/TimeTrackerMain';
import WelcomeCard from './WelcomeCard/containers/WelcomeCard';
import EventsFeed from './EventsFeed/containers/EventsFeed';

import {  toggleSidePanelsVisibility  } from './appActions/sidePanelActions';

class App extends Component {
  toggleSidePanelsVisibility() {
    this.props.toggleSidePanelsVisibility();
  }

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

    let leftPanel = null;
    let rightPanel = null;

    if (this.props.showSidePanels) {
      leftPanel = (
        <div className="container" style={{paddingTop: "5%"}}>
          <EventsFeed />
        </div>
      )
      rightPanel = (
        <div className="container" style={{paddingTop: "5%"}}>
          <div className="row">
            <TimeTrackerMain />
          </div>
          <div className="row">
            <TodoListApp/>
          </div>
        </div>
      )
    }

    return (
      <div className="App container-fluid" style={backgroundImageStyle}> {/* Attatch background image */}
        <div className="row h-100">
          
          <div className="col-3" 
            style={{height:"100vh"}} 
            onMouseEnter={this.toggleSidePanelsVisibility.bind(this)} 
            onMouseLeave={this.toggleSidePanelsVisibility.bind(this)}>
            {leftPanel}
          </div>

          <div className="col-6 align-self-center">
            <div className="text-center">
              <WelcomeCard />
            </div>
            
          </div>

          <div className="col-3"
            style={{height:"100vh"}} 
            onMouseEnter={this.toggleSidePanelsVisibility.bind(this)} 
            onMouseLeave={this.toggleSidePanelsVisibility.bind(this)}>
            {rightPanel}
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSidePanels: state.showSidePanels
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleSidePanelsVisibility: () => {
      dispatch(toggleSidePanelsVisibility());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)