import React from 'react';


const EventCard = ({event}) => {
	console.log(event);
	let timeRender = "";

	if (event.isWholeDayEvent) {
		timeRender = "Whole Day Event"
	} else {
		if (event.displayStartTime) {
			timeRender = `From ${event.startTime.hours}:${event.startTime.minutes} `
		}
		if (event.displayEndTime) {
			timeRender += `Till ${event.endTime.hours}:${event.endTime.minutes}`
		}
	}

	return (
		<div className="mdc-card bg-faded" style={{marginBottom: "5%"}}>
		  <section className="mdc-card__primary">
		    <h1 className="mdc-card__title mdc-card__title--large text-muted">{event.summary}</h1>
		    <h2 className="mdc-card__subtitle text-muted">{timeRender}</h2>
		  </section>
		</div>
	);
}

export default EventCard;

