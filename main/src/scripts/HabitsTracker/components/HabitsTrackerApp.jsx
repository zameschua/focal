import React from 'react'
import HabitsList from "../containers/HabitsList"
import HabitsTrackerHeader from "../containers/HabitsTrackerHeader"

const HabitTrackerApp = () => (
	<div className="mdc-card bg-faded col-sm-12" style={{backgroundColor: "rgba(0,0,0,0.2)", borderRadius:"25px"}}>
	  <section className="mdc-card__primary">
	  	<h1 className="mdc-card__title mdc-card__title--large text-white" style={{fontFamily:"Segoe UI",fontWeight:"bold"}}>Habits Tracker</h1>
	  </section>
	  <section className="mdc-card__supporting-text text-muted">
	  	<HabitsTrackerHeader />
	  	<br />
	  	<HabitsList />
	  </section>
	</div>
)

export default HabitTrackerApp
