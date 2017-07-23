import React from 'react';

const EventCard = ({ event }) => {
  let timeRender = '';

  if (event.isWholeDayEvent) {
    timeRender = 'Whole Day Event';
  } else {
    // If time is single digit ie. 12:05, Insert 0 in front of the time to make it double digit
    let startTime = `${event.startTime.minutes}`;
    let endTime = `${event.endTime.minutes}`;
    if (event.startTime.minutes < 10) {
      startTime = `0${event.startTime.minutes}`;
    }
    if (event.endTime.minutes < 10) {
      endTime = `0${event.endTime.minutes}`;
    }

    if (event.displayStartTime) {
      timeRender = `from ${event.startTime.hours}:${startTime} `;
    }
    if (event.displayEndTime) {
      timeRender += `till ${event.endTime.hours}:${endTime}`;
    }
  }

  return (
    <div className="mdc-card" style={{ marginBottom: '5%', backgroundColor: 'rgba(0, 0, 0, 0.70)' }}>
      <section className="mdc-card__primary">
        <h1 className="mdc-card__title mdc-card__title--large mdc-theme--text-primary-on-dark">
          {event.summary}
        </h1>
        <h2 className="mdc-card__subtitle mdc-theme--text-secondary-on-dark">{timeRender}</h2>
      </section>
    </div>
  );
};

export default EventCard;

