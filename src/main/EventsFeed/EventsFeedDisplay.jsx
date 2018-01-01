import React from 'react';
import ScrollArea from 'react-scrollbar';

import EventsDay from './EventsDay';

const EventsFeedDisplay = ({ events }) => {
  const eventsDayRender = [];
 
  const eventsToDisplay = (eventsDay) => {
    if (eventsDay == null || eventsDay === undefined) {
      return false;
    } else if (eventsDay.wholeDayEvents === undefined || eventsDay.remainingEvents === undefined) {
      return false;
    } else if (eventsDay.dayHasEvents === false) {
      return false;
    }
    return true;
  };

  for (let i in events) {
    if (eventsToDisplay(events[i])) {
      eventsDayRender.push(<EventsDay eventsDay={events[i]} key={events[i].index} />);
    }
  }

  const myScrollbar = {
    height: '98vh',
    width: '100%',
  };

  return (
    <ScrollArea horizontal={false} style={myScrollbar} smoothScrolling={true}>
      {eventsDayRender}
    </ScrollArea>
  );
};

export default EventsFeedDisplay;
