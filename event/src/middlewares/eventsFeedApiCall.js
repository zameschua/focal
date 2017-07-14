import {  getCalendarEventsSuccess, getCalendarEventsFailure  } from '../backendActions/index';

const eventsFeedApiCall = (token, store) => {
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
  .then(function(events) {
  		let dateArray = createAndFillDateArray();
      let eventsPayloadArray = splitEventsByDay(events, dateArray);
      let sortedEventsPayloadArray = sortEventsByTime(eventsPayloadArray, store, dateArray);
    });
}

// Takes in Event oject and returns an object of events split by their days
const splitEventsByDay = (events, dateArray) => {
  // Create array of 7 empty arrays
  let eventsPayloadArray = Array.from({ length: 7 }, (x) => []);
  
  events.items.forEach((event) => {
	  let isFullDayEvent = false;
 		let eventStart = new Date(Date.parse(event.start.dateTime));
 		let eventStartTime = eventStart.getTime();
 		let eventEnd = new Date(Date.parse(event.end.dateTime));
		let eventEndTime = eventEnd.getTime();

		// If full day event
		if (isNaN(eventStartTime) || isNaN(eventEndTime)) {
			isFullDayEvent = true;
			eventStart = new Date(Date.parse(event.start.date));
			eventEnd = new Date(Date.parse(event.start.date));
			eventEnd = new Date(eventEnd.getFullYear(), eventEnd.getMonth(), eventEnd.getDate())
		}

  	// For each date in the next week
   	for (let i = 0; i < 7; i++) {
  		const dayStart = dateArray[i];
  		const dayEnd = dateArray[i+1]
  		const dayStartTime = dayStart.getTime();
  		const dayEndTime = dayEnd.getTime();
  		
			const payloadStartTime = {
				date: eventStart,
				hours: eventStart.getHours(),
				minutes: eventStart.getMinutes()
			};
			const payloadEndTime = {
				date: eventEnd,
				hours: eventEnd.getHours(),
				minutes: eventEnd.getMinutes()
			}

  		if (isFullDayEvent) {
  			if ((eventStart.getDate() <= dayStart.getDate()) && (dayStart.getDate() <= eventEnd.getDate())) {
  				const eventPayload = createEventPayload(event.summary, payloadStartTime, payloadEndTime, event.location, false, false, true);
  				eventsPayloadArray[i].push(eventPayload);
  			}
  		// Event starts and ends on that day
  		} else if (eventStartTime >= dayStartTime && eventEndTime < dayEndTime) {
  			const eventPayload = createEventPayload(event.summary, payloadStartTime, payloadEndTime, event.location, true, true, false);
  			eventsPayloadArray[i].push(eventPayload);
  		// Event spans a vew days / whole day
  		} else if (eventStartTime <= dayStartTime && eventEndTime >= dayEndTime) {
  			const eventPayload = createEventPayload(event.summary, payloadStartTime, payloadEndTime, event.location, false, false, true);
  			eventsPayloadArray[i].push(eventPayload);
  		// Event ends on that day
  		} else if (eventStartTime < dayStartTime && (eventEndTime > dayStartTime && eventEndTime < dayEndTime)) {
  			const eventPayload = createEventPayload(event.summary, payloadStartTime, payloadEndTime, event.location, false, true, false);
  			eventsPayloadArray[i].push(eventPayload);
  		// Event starts on that day
  		} else if ((eventStartTime > dayStartTime && eventStartTime < dayEndTime) && eventEndTime > dayEndTime){
  			const eventPayload = createEventPayload(event.summary, payloadStartTime, payloadEndTime, event.location, true, false, false);
  			eventsPayloadArray[i].push(eventPayload);
  		}
  	}
  });
  return eventsPayloadArray;
}


// Creates an array of dates as such [toda]
const createAndFillDateArray = () => {
	let currentDateTime = new Date;
  let dateToday = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate());
  
  let dateArray = [];
  for (let i = 0; i < 8; i++) {
  	dateArray.push(getDateOfNDaysFromToday(dateToday, i));
  }

  return dateArray;
}

const getDateOfNDaysFromToday = (dateToday, daysFromToday) => {
	let newDate = new Date(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate() + daysFromToday);
	return newDate;
}

const createEventPayload = (summary, startTime, endTime, location, displayStartTime, displayEndTime, isWholeDayEvent) => {
	return {
		summary,
		startTime,
		endTime,
		location,
		displayStartTime,
		displayEndTime,
		isWholeDayEvent
	}
}

const sortEventsByTime = (eventsPayloadArray, store, dateArray) => {
	const monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

	// Initialize empty payload
	let resultArray = Array.from({ length: 7 }, (x) => {});

	// For each day
	for (let i = 0; i < eventsPayloadArray.length; i++) {
		let dayArray = eventsPayloadArray[i];
		
		// If the day has at least 1 event
		if (dayArray != []) {
			let wholeDayEvents = [];
			for (let j = 0; j < dayArray.length; j++) {
				// Remove and store events that are whole day
				let event = dayArray[j];
				if (event.isWholeDayEvent) {
					// If the event is whole day, transfer it to resultArray.wholeDayEvents
					dayArray.splice(j, 1);
					wholeDayEvents.push(event);
				}
			}
			// Sort the remaining events by time
			dayArray.sort((event1, event2) => {
				if (event1.startTime.date.getTime() < event2.startTime.date.getTime()) {
					return -1;
				} else {
					return 1;
				}
			});

			// Set dayHasEvents to true if there are any events on that day, else false if no events on that day.
			let dayHasEvents = true;
			if (wholeDayEvents.length === 0 && dayArray.length === 0) {
				dayHasEvents = false
			}

			resultArray[i] = {
				wholeDayEvents,
				remainingEvents: dayArray,
				dayHasEvents,
				date: dateArray[i].getDate(),
				month: monthsArray[dateArray[i].getMonth()],
				day: dateArray[i].toString().split(' ')[0],
				index: i
			}
		}
		console.log(resultArray);
		store.dispatch(getCalendarEventsSuccess(resultArray));
	}
}

export default eventsFeedApiCall;
