import { connect } from 'react-redux'
import React, {  Component  } from 'react';
import {  updateOAuth2Token  } from '../actions/oAuth2Action'


class EventsFeed extends Component {
	constructor() {
		super();
	}

	handleClick() {
		let self = this; // So that we can use 'this' in callback
	  chrome.identity.getAuthToken({ 'interactive': false }, function(token) {
	    self.props.updateOAuth2Token(token);
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
      userHasAuthenticated: state.eventsFeed.token.userHasAuthenticated
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
		updateOAuth2Token: (token) => {
			dispatch(updateOAuth2Token(token));
		}
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsFeed)

/*
  let today = new Date()
  let nextWeek = new Date((new Date()).setDate(today.getDate() + 8)) // Add 1 week
  let timeMax = nextWeek.toISOString();
  let timeMin = today.toISOString();

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