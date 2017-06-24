import React from 'react'
import ShowURL from "../container/ShowURL"


const TimeTrackerMain = () => (
  <div className="mdc-card bg-faded">
    <section className="mdc-card__primary">
	    <h1 className="mdc-card__title mdc-card__title--large text-muted">Time Tracker</h1>
	  </section>
    <section className="mdc-card__supporting-text">
      <ShowURL />
    </section>
  </div>
);

export default TimeTrackerMain;
