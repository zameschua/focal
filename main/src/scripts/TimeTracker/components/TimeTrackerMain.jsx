import React from 'react'
import ShowURL from "../container/ShowURL"


const TimeTrackerMain = () => (
  <div className="mdc-card">
    <section className="mdc-card__primary" style={{backgroundColor: "white"}}>
	    <h1 className="mdc-card__title mdc-card__title--large">Time Tracker</h1>
	  </section>
    <section className="mdc-card__supporting-text" style={{backgroundColor: "white"}}>
      <ShowURL />
    </section>
  </div>
);

export default TimeTrackerMain;
