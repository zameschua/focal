import { connect } from 'react-redux'
import React, {  Component  } from 'react';
import {  updateUserAuthenticationStatus  } from '../actions/updateUserAuthenticationStatus'
import {  getCalendarEvents  } from '../actions/getCalendarEvents'
import _ from 'lodash'
import EventsFeedDisplay from '../components/EventsFeedDisplay'

class EventsFeed extends Component {
	constructor() {
		super();
	}

	handleClick() {
		let self = this; // So that we can use 'this' in callback
    // Authenticate on the front end (So that user knows that we are obtaining their calendar info)
	  chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
	    self.props.updateUserAuthenticationStatus(true);
      self.props.getCalendarEvents();
	  })
	}

	render() {
  	if (this.props.userHasAuthenticated == false) {
			return <button onClick={this.handleClick.bind(this)}>Authenticate</button>; // TODO: Extract into another component
		} else {
			return <EventsFeedDisplay events={this.props.events}/>;
		}
	}
}

const mapStateToProps = state => {
  if (state.eventsFeed) {
  	return {
  	  events: state.eventsFeed.events,
      userHasAuthenticated: state.eventsFeed.userHasAuthenticated
    };
  } else {
  	return {
      events: [],
      userHasAuthenticated: false
  	};
  }
}

const mapDispatchToProps = dispatch => {
	return {
		updateUserAuthenticationStatus: (status) => {
			dispatch(updateUserAuthenticationStatus(status));
		},
    getCalendarEvents: () => {
      dispatch(getCalendarEvents());
    }
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsFeed)
