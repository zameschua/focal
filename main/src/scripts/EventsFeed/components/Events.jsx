import React from 'react';
import EventCard from './EventCard';

const Events = ({ remainingEvents, wholeDayEvents }) => {
  const wholeDayEventsRender = wholeDayEvents.map(event => (
    <EventCard event={event} />
  ));

  const remainingEventsRender = remainingEvents.map(event => (
    <EventCard event={event} />
  ));

  return (<div>
    {wholeDayEventsRender}
    {remainingEventsRender}
  </div>);
};

export default Events;
