import React from 'react';
import DateCard from './DateCard';
import Events from './Events';

const EventsDay = ({eventsDay}) => {
	return (<div className="row">
		<div className="col-md-3">
			<DateCard date={eventsDay.date} month={eventsDay.month} day={eventsDay.day}/>
		</div>
		<div className="col-md-9">
		  <Events wholeDayEvents={eventsDay.wholeDayEvents} remainingEvents={eventsDay.remainingEvents} />
		</div>
	</div>);
}

export default EventsDay;