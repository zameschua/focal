import React from 'react';
import EventCard from './EventCard'

const Events = ({remainingEvents, wholeDayEvents}) => {
	let wholeDayEventsRender = wholeDayEvents.map(event => {
		return <EventCard event={event}/>
	});
	let remainingEventsRender = remainingEvents.map(event => {
		return <EventCard event={event}/>
	})
	return (<div>
	  {wholeDayEventsRender}
	  {remainingEventsRender}
	</div>);
}

export default Events;