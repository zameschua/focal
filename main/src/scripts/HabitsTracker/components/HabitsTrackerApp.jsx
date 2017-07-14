import React from 'react'
import HabitsList from "./HabitsList"
import HabitsTrackerHeader from "./HabitsTrackerHeader"

const HabitTrackerApp = () => (
	<div className="mdc-card bg-faded col-sm-12" style={{marginBottom: "5%"}}>
	  <section className="mdc-card__primary">
	    <HabitsTrackerHeader />
	  </section>
	  <section className="mdc-card__supporting-text text-muted">
	  	<HabitsList />
	  </section>
	</div>
)

export default HabitTrackerApp
