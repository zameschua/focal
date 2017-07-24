import React, { Component } from 'react';
import { connect } from 'react-redux';
import Transition from 'react-transition-group/Transition';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-components-web/dist/material-components-web.css';
import { autoInit } from 'material-components-web/dist/material-components-web';

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

  componentDidMount() {
    // Load up Material Components Web
    autoInit();
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
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        height: '100vh',
        overflow: 'hidden',
      };

      const transitionDuration = 200;

      const leftPanelDefaultStyles = {
        transition: `opacity ${transitionDuration}ms ease-in-out, left ${transitionDuration}ms ease-in-out`,
        opacity: 0,
        marginTop: '5%',
        left: '-5vw',
      };

      const rightPanelDefaultStyles = {
        transition: `opacity ${transitionDuration}ms ease-in-out, right ${transitionDuration}ms ease-in-out`,
        opacity: 0,
        marginTop: '5%',
        right: '-5vw',
      };

      const leftPanelTransitionStyles = {
        entering: { opacity: 1, left: '0vw' },
        entered: { opacity: 1, left: '0vw' },
        exiting: { opacity: 0, left: '-5vw' },
        exited: { opacity: 0, left: '-5vw' },
      };

      const rightPanelTransitionStyles = {
        entering: { opacity: 1, right: '0vw' },
        entered: { opacity: 1, right: '0vw' },
        exiting: { opacity: 0, right: '-5vw' },
        exited: { opacity: 0, right: '-5vw' },
      };

      const leftPanel = (
        <Transition in={this.state.sidePanelsVisible} timeout={transitionDuration} >
          {state => (
            <div
              className="container"
              style={{
                ...leftPanelDefaultStyles,
                ...leftPanelTransitionStyles[state],
              }}
            >
              <EventsFeed />
            </div>
          )}
        </Transition>
      );

      const rightPanel = (
        <Transition in={this.state.sidePanelsVisible} timeout={transitionDuration} >
          {state => (
            <div
              className="container"
              style={{
                ...rightPanelDefaultStyles,
                ...rightPanelTransitionStyles[state],
              }}
            >
              <div className="row">
                <TimeTrackerMain />
              </div>
              <br />
              <div className="row">
                <HabitsTrackerApp/>
              </div>
            </div>
          )}
        </Transition>
      );

      return (
        <div className="App container-fluid" style={{ padding: '0' }}>
          <div style={backgroundImageStyle}>
            <div className="row h-100">

              <div 
                className="col-3"
                style={{ height: '100vh', paddingRight: '0' }}
                onMouseEnter={this.showSidePanels.bind(this)}
                onMouseLeave={this.hideSidePanels.bind(this)}
              >
                {leftPanel}
              </div>

              <div className="col-6 align-self-center">
                <div className="text-center">
                  <WelcomeCard userName={ this.props.userName }/>
                </div>
                
              </div>

              <div className="col-3"
                style={{ height: '100vh', paddingLeft: '0' }}
                onMouseEnter={this.showSidePanels.bind(this)}
                onMouseLeave={this.hideSidePanels.bind(this)}
              >
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

const mapStateToProps = (state) => {
  // Check if the state is ready
  if (state.appState) {
    return {
      sidePanelsVisible: state.appState.sidePanelsVisible,
      userFirstLogin: (state.appState.userName === ''), // Returns true if user first login
      userName: state.appState.userName,
      wallpaperUrl: state.appState.cachedWallpapers.nextWallpaper,
      storeHasLoaded: true,
    };
  }
  return {
    sidePanelsVisible: false,
    userFirstLogin: true,
    userName: '',
    wallpaperUrl: '',
    storeHasLoaded: false,
  };
};

export default connect(
  mapStateToProps,
  null,
)(App);
