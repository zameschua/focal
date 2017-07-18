import React from 'react';
import ReactScrollbar from 'react-scrollbar-js';
import ScrollArea from 'react-scrollbar';

import EventsDay from './EventsDay';

const EventsFeedDisplay = ({events}) => {
	const eventsDayRender = [];
	for (let i in events) {
		if (eventsToDisplay(events[i])) {
			eventsDayRender.push(<EventsDay eventsDay={events[i]} key={events[i].index}/>)
		}
	}

	const myScrollbar = {
  height: "500px",
  width: "100%",
  borderRadius:"25px"
	};

	return (
		<ScrollArea horizontal={false} style={myScrollbar} smoothScrolling={true}>
			{eventsDayRender}
		</ScrollArea>
	);
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
