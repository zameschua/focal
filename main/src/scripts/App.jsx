import React, {  Component  } from 'react';
import {  connect  } from 'react-redux';

import TodoListApp from './TodoList/components/TodoListApp';
import TemplatePanelComponent from './TemplatePanel/components/TemplatePanelComponent'; // Temporary component
import TimeTrackerMain from './TimeTracker/components/TimeTrackerMain';
import WelcomeCard from './WelcomeCard/containers/WelcomeCard';
import EventsFeed from './EventsFeed/containers/EventsFeed';
import RequestName from './RequestName/containers/RequestName';
import {  showSidePanels, hideSidePanels  } from './appActions/sidePanelActions';

class App extends Component {
  render() {
    // Requests for user name if it's user's first login
    if (this.props.userFirstLogin) {
      return <RequestName />
    }

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

    if (this.props.sidePanelsVisible) {
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
            onMouseEnter={this.props.showSidePanels.bind(this)} 
            onMouseLeave={this.props.hideSidePanels.bind(this)}>
            {leftPanel}
          </div>

          <div className="col-6 align-self-center">
            <div className="text-center">
              <WelcomeCard userName={this.props.userName}/>
            </div>
            
          </div>

          <div className="col-3"
            style={{height:"100vh"}} 
            onMouseEnter={this.props.showSidePanels.bind(this)} 
            onMouseLeave={this.props.hideSidePanels.bind(this)}>
            {rightPanel}
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // Check if the state is ready
  if (state.appState) {
    return {
      sidePanelsVisible: state.appState.sidePanelsVisible,
      userFirstLogin: (state.appState.userName === ""), // Returns true if user first login
      userName: state.appState.userName,
    }
  } else {
    return {
      sidePanelsVisible: false,
      userFirstLogin: true,
    };
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showSidePanels: () => {
      dispatch(showSidePanels());
    },
    hideSidePanels: () => {
      dispatch(hideSidePanels());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)