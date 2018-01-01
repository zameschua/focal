import { connect } from 'react-redux';
import React, { Component } from 'react';
import { updateUserAuthenticationStatus } from '../actions/updateUserAuthenticationStatus';
import { getCalendarEvents } from '../actions/getCalendarEvents';
import EventsFeedDisplay from './EventsFeedDisplay';

class EventsFeed extends Component {
  handleAuthenticate() {
    const self = this; // So that we can use 'this' in callback
    // Authenticate on the front end (So that user knows that we are obtaining their calendar info)
    chrome.identity.getAuthToken({ interactive: true }, function(token) {
      self.props.updateUserAuthenticationStatus(true);
      self.props.getCalendarEvents();
    });
  }

  render() {
    return <EventsFeedDisplay events={this.props.events} />;
  }
}

const mapStateToProps = state => {
  if (state.eventsFeed) {
    return {
      events: state.eventsFeed.events,
      userHasAuthenticated: state.eventsFeed.userHasAuthenticated,
    };
  }
  return {
    events: [],
    userHasAuthenticated: false,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserAuthenticationStatus: status => {
      dispatch(updateUserAuthenticationStatus(status));
    },
    getCalendarEvents: () => {
      dispatch(getCalendarEvents());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventsFeed);
