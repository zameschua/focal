import { connect } from 'react-redux'
import React, {  Component  } from 'react';
import {  updateUserAuthenticationStatus  } from '../actions/updateUserAuthenticationStatus'
import {  getCalendarEvents  } from '../actions/getCalendarEvents'

class EventsFeed extends Component {
	constructor() {
		super();
	}

  componentDidMount() {
    this.props.getCalendarEvents();
  }

	handleClick() {
		let self = this; // So that we can use 'this' in callback
	  chrome.identity.getAuthToken({ 'interactive': true }, function(token) {
	    self.props.updateUserAuthenticationStatus(true);
	  })
	}

	render() {
		if (this.props.userHasAuthenticated == false) {
			return <button onClick={this.handleClick.bind(this)}>Authenticate</button>;
		} else {
			return <div>"NOTHING TO DISPLAY"</div>;
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
      events: {},
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

/*


  const headers = new Headers({
      'Authorization' : 'Bearer ' + token,
      'Content-Type': 'application/json',
  })

  const queryParams = { 
    headers
  };

  fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${timeMin}&timeMax=${timeMax}`, queryParams)
  .then((response) => response.json()) // Transform the data into json
  .then(function(data) {
      console.log(data);
    })
*/