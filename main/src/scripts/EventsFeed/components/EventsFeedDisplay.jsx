import React from 'react';
import EventsDay from './EventsDay';

const EventsFeedDisplay = ({events}) => {
	const eventsDayRender = [];
	for (let i in events) {
		if (eventsToDisplay(events[i])) {
			eventsDayRender.push(<EventsDay eventsDay={events[i]} key={events[i].index}/>)
		}
	}
	
	return <div>{eventsDayRender}</div>;
}

export default EventsFeedDisplay;

const eventsToDisplay = eventsDay => {
	if (eventsDay == null || eventsDay == undefined) {
		return false;
	} else if (eventsDay.wholeDayEvents == undefined || eventsDay.remainingEvents == undefined) {
		return false;
	} else if (eventsDay.dayHasEvents == false) {
		return false;
	}
	return true;
}
