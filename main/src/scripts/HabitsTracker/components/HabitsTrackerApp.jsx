import React from 'react'
import HabitsList from "./HabitsList"

const HabitTrackerApp = () => (
	<div className="mdc-card bg-faded col-sm-12" style={{marginBottom: "5%"}}>
	  <section className="mdc-card__primary">
	    <h1 className="mdc-card__title mdc-card__title--large text-muted">To-do list</h1>
	  </section>
	  <section className="mdc-card__supporting-text text-muted">
	  	<HabitsList />
	  </section>
	</div>
)

export default HabitTrackerApp
