import React from 'react'
import HabitsList from "../containers/HabitsList"
import HabitsTrackerHeader from "../containers/HabitsTrackerHeader"

const HabitTrackerApp = () => (
	<div className="mdc-card col-sm-12" style={{backgroundColor: "rgba(0,0,0,0.70)"}}>
	    <section className="mdc-card__primary text-center">
		    <h1 className="mdc-card__title mdc-card__title--large mdc-theme--text-primary-on-dark">Habit Tracker</h1>
		  </section>
	  <section className="mdc-card__supporting-text text-muted">
	  	<HabitsTrackerHeader />
	  	<br />
	  	<HabitsList />
	  </section>
	</div>
)

export default HabitTrackerApp
