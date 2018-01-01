import React, { Component } from 'react';
import { connect } from 'react-redux';
import Transition from 'react-transition-group/Transition';

import 'bootstrap/dist/css/bootstrap.min.css';

import WelcomeCard from './WelcomeCard/containers/WelcomeCard';
import EventsFeed from './EventsFeed/containers/EventsFeed';
import FirstSignIn from './FirstSignIn/FirstSignIn';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidePanelsVisible: false,
    };
  }

  componentDidMount() {}

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
      if (!this.props.userHasAuthenticated) {
        return <FirstSignIn />;
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

      const leftPanelTransitionStyles = {
        entering: { opacity: 1, left: '0vw' },
        entered: { opacity: 1, left: '0vw' },
        exiting: { opacity: 0, left: '-5vw' },
        exited: { opacity: 0, left: '-5vw' },
      };

      const leftPanel = (
        <Transition
          in={this.state.sidePanelsVisible}
          timeout={transitionDuration}
        >
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

      return (
        <div className="App container-fluid" style={{ padding: '0' }}>
          <div style={backgroundImageStyle}>
            <div className="row h-100">
              <div
                className="col-3"
                style={{ height: '100vh', paddingRight: '0' }}
                onMouseEnter={this.showSidePanels.bind(this)}
                onMouseLeave={this.hideSidePanels.bind(this)}>
                {leftPanel}
              </div>

              <div className="col-6 align-self-center">
                <div className="text-center">
                  <WelcomeCard userName={this.props.userName} />
                </div>
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
      userHasAuthenticated: state.appState.userHasAuthenticated, // Returns true if user first login
      wallpaperUrl: state.appState.cachedWallpapers.nextWallpaper,
      storeHasLoaded: true,
    };
  }
  return {
    sidePanelsVisible: false,
    userHasAuthenticated: false,
    wallpaperUrl: '',
    storeHasLoaded: false,
  };
};

export default connect(mapStateToProps, null)(App);
