import React from 'react';
import EventCard from './EventCard'

const Events = ({remainingEvents, wholeDayEvents}) => {
	let wholeDayEventsRender = wholeDayEvents.map(event => {
		return <EventCard event={event} key={event}/>
	});
	let remainingEventsRender = remainingEvents.map(event => {
		return <EventCard event={event} key={event}/>
	})
	return (<div>
	  {wholeDayEventsRender}
	  {remainingEventsRender}
	</div>);
}

export default Events;