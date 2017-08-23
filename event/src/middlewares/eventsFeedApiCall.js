import {  getCalendarEventsSuccess, getCalendarEventsFailure  } from '../backendActions/index';
import moment from 'moment';

const eventsFeedApiCall = (token, store) => {
  const today = moment();
  const nextWeek = moment(today).add(7, 'days') // Add 1 week
  const timeMin = today.toISOString();
  const timeMax = nextWeek.toISOString();

  // Format payload for API call
  const headers = new Headers({
    'Authorization' : 'Bearer ' + token,
    'Content-Type': 'application/json'
  })
  const queryParams = { headers };

  // Make the actual call
  fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events?timeMin=${timeMin}&timeMax=${timeMax}`, queryParams)
  .then((response) => response.json()) // Transform the data into json
  .then(function(events) {
    console.log(events);
    let dateArray = createDateArray();
    let eventsPayloadArray = splitEventsByDay(events, dateArray);
    let sortedEventsPayloadArray = sortEventsByTime(eventsPayloadArray, store, dateArray);
  });
}

// Takes in Event oject and returns an object of events split by their days
const splitEventsByDay = (events, dateArray) => {
  // Create array of 7 empty arrays
  let eventsPayloadArray = Array.from({ length: 7 }, (x) => []);
  
  events.items.forEach((event) => {
    let fullDayEvent = false;
    let eventStart = moment(event.start.dateTime);
    let eventEnd = moment(event.end.dateTime);

    if (isFullDayEvent(event)) {
      fullDayEvent = true;
      eventStart = moment(event.start.date).startOf('day');
      eventEnd = moment(event.end.date).subtract(1, 'days').endOf('day');
    }

  	// For each date in the next week
   	for (let i = 0; i <= 6; i++) {
  		const dayStart = dateArray[i];
  		const dayEnd = moment(dayStart).endOf('day');
  		
			const payloadStartTime = {
				date: eventStart,
				hours: eventStart.get('hours'),
				minutes: eventStart.get('minutes'),
			};
			const payloadEndTime = {
				date: eventEnd,
				hours: eventEnd.get('hours'),
				minutes: eventEnd.get('minutes'),
			}

  		if (fullDayEvent) {
  			if ((eventStart.isSameOrBefore(dayStart)) && (eventEnd.isSameOrAfter(dayEnd))) {
  				const eventPayload = createEventPayload(event.summary, payloadStartTime, payloadEndTime, event.location, false, false, true);
  				eventsPayloadArray[i].push(eventPayload);
  			}
  		} else {
  			// Event starts and ends on that day
  			if (eventStart.isSameOrAfter(dayStart) && eventEnd.isSameOrBefore(dayEnd)) {
	  			const eventPayload = createEventPayload(event.summary, payloadStartTime, payloadEndTime, event.location, true, true, false);
	  			eventsPayloadArray[i].push(eventPayload);
	  		// Event spans a few days / whole day
	  		} else if (eventStart.isSameOrBefore(dayStart) && eventEnd.isSameOrAfter(dayEnd)) {
	  			const eventPayload = createEventPayload(event.summary, payloadStartTime, payloadEndTime, event.location, false, false, true);
	  			eventsPayloadArray[i].push(eventPayload);
	  		// Event ends on that day
	  		} else if (eventStart.isBefore(dayStart) && (eventEnd.isAfter(dayStart) && eventEnd.isSameOrBefore(dayEnd))) {
	  			const eventPayload = createEventPayload(event.summary, payloadStartTime, payloadEndTime, event.location, false, true, false);
	  			eventsPayloadArray[i].push(eventPayload);
	  		// Event starts on that day
	  		} else if ((eventStart.isAfter(dayStart) && eventStart.isSameOrBefore(dayEnd)) && eventEnd.isAfter(dayEnd)) {
	  			const eventPayload = createEventPayload(event.summary, payloadStartTime, payloadEndTime, event.location, true, false, false);
	  			eventsPayloadArray[i].push(eventPayload);
	  		}
	  	}
	  }
  });
  return eventsPayloadArray;
}

// Full-day events have a .date field, non full-day events have a .dateTime field
const isFullDayEvent = (event) => {
	return (event.start.date != undefined && event.end.date != undefined);
}

// Creates an array of dates like [today, tomorrow, day after, ... 1 week later]
const createDateArray = () => {
  const dateToday = moment().startOf('day');
  
  let dateArray = [];
  for (let i = 0; i <= 6; i++) {
    dateArray.push(moment(dateToday).add(i, 'days'));
  }

  return dateArray;
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
        if (event1.startTime.date.isBefore(event2.startTime.date)) {
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
        date: dateArray[i].get('date'),
        month: monthsArray[dateArray[i].get('month')],
        day: dateArray[i].toString().split(' ')[0],
        location: dateArray[i].location,
        index: i,
      }
    }
    store.dispatch(getCalendarEventsSuccess(resultArray));
  }
}

export default eventsFeedApiCall;
