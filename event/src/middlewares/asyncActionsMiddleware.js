import {  updateUserAuthenticationStatus  } from '../backend-actions/index';

const asyncActionsMiddleware = store => next => action => {
  if (action.async) {
  	switch (action.type) {
  		case 'GET_CALENDAR_EVENTS':

  			// Get the token again anyways in case it has expired
			  chrome.identity.getAuthToken({ 'interactive': false }, function(token) {
			  	makeAPICall(token);
			    store.dispatch(updateUserAuthenticationStatus(true));
			  });

		  default:
			  return next(action);
		}
	} else {
		return next(action);
	}
}

export default asyncActionsMiddleware;




// Helper method
const makeAPICall = (token) => {
	let today = new Date()
  let nextWeek = new Date((new Date()).setDate(today.getDate() + 7)) // Add 1 week
  let timeMax = nextWeek.toISOString();
  let timeMin = today.toISOString();

	const headers = new Headers({
    'Authorization' : 'Bearer ' + token,
    'Content-Type': 'application/json'
	})

	const queryParams = { headers };

  fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${timeMin}&timeMax=${timeMax}`, queryParams)
  .then((response) => response.json()) // Transform the data into json
  .then(function(data) {
      console.log(data);
    });
}