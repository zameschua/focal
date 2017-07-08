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
			timeRender += `To ${event.endTime.hours}:${event.endTime.minutes}`
		}
	}

	return (
		<div className="container">	
			<div className="row">
				{event.summary}
			</div>
			<div className="row">
				{timeRender}
			</div>
		</div>
	);
}

export default EventCard;
