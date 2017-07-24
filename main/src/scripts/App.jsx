import React, { Component } from 'react';
import { connect } from 'react-redux';
import {TransitionMotion, spring} from 'react-motion';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-components-web/dist/material-components-web.css';
import { autoInit } from 'material-components-web/dist/material-components-web.js';
autoInit();

import TimeTrackerMain from './TimeTracker/components/TimeTrackerMain';
import WelcomeCard from './WelcomeCard/containers/WelcomeCard';
import EventsFeed from './EventsFeed/containers/EventsFeed';
import RequestName from './RequestName/containers/RequestName';
import HabitsTrackerApp from './HabitsTracker/components/HabitsTrackerApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidePanelsVisible: false,
    };
  }

  showSidePanels() {
    this.setState({
      sidePanelsVisible: true,
    });
  }

  hideSidePanels() {
    this.setState({
      sidePanelsVisible: false,
    });
  }

  render() {
    if (this.props.storeHasLoaded) {
      // Requests for user name if it's user's first login
      if (this.props.userFirstLogin) {
        return <RequestName />;
      }

      const wallpaperUrl = this.props.wallpaperUrl;
      
      const backgroundImageStyle = {
        background: `url(${wallpaperUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        height: "100vh",
        overflow: "hidden",
      };

      let leftPanel = null;
      let rightPanel = null;

      if (this.state.sidePanelsVisible) {
        leftPanel = (
          <div className="container" style={{paddingTop: "5%"}}>
            <EventsFeed />
          </div>
        );
        rightPanel = (
          <div className="container" style={{paddingTop: "5%"}}>
            <div className="row">
              <TimeTrackerMain />
            </div>
            <br />
            <div className="row">
              <HabitsTrackerApp/>
            </div>
          </div>
        );
      }

      return (
        <div className="App container-fluid" style={{padding: "0"}}> {/* Attatch background image */}
          <div style={backgroundImageStyle}>
            <div className="row h-100">
              
              <div className="col-3" 
                style={{height: "100vh", paddingRight: "0"}}
                onMouseEnter={this.showSidePanels.bind(this)}
                onMouseLeave={this.hideSidePanels.bind(this)}>
                {leftPanel}
              </div>

              <div className="col-6 align-self-center">
                <div className="text-center">
                  <WelcomeCard userName={this.props.userName}/>
                </div>
                
              </div>

              <div className="col-3"
                style={{height:"100vh", paddingLeft: "0"}}
                onMouseEnter={this.showSidePanels.bind(this)}
                onMouseLeave={this.hideSidePanels.bind(this)}>
                {rightPanel}
              </div>

            </div>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

const mapStateToProps = state => {
  // Check if the state is ready
  if (state.appState) {
    return {
      sidePanelsVisible: state.appState.sidePanelsVisible,
      userFirstLogin: (state.appState.userName === ''), // Returns true if user first login
      userName: state.appState.userName,
      wallpaperUrl: state.appState.cachedWallpapers.nextWallpaper,
      storeHasLoaded: !(state.appState === undefined),
    };
  } else {
    return {
      sidePanelsVisible: false,
      userFirstLogin: true,
      userName: "",
      wallpaperUrl: "",
    };
  }
}

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
