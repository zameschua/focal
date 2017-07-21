import React, {  Component  }  from 'react'
import ShowURL from "../containers/ShowURL"
import URLInfo from "./URLInfo"
import ButtonActions from "../containers/ButtonActions"
import {Collapse} from 'react-collapse'

class TimeTrackerMain extends Component {
	constructor() {
		super();
		this.state = {isOpened: false};
		this.toggleClick = this.toggleClick.bind(this);
	}

	toggleClick() {
		this.setState({isOpened: !this.state.isOpened});
	}

	render() {
		return (
	  <div className="mdc-card" style={{backgroundColor: "rgba(0,0,0,0.8)"}}>
	    <section className="mdc-card__primary text-center">
		    <h1 className="mdc-card__title mdc-card__title--large mdc-theme--text-primary-on-dark">Time Tracker</h1>
		  </section>
	    <section className="mdc-card__supporting-text">
	    	{/* Panel will resize causing doughnut to have no animation. FIXED: Set responsive to false */}
	      <ShowURL />	
	      <ButtonActions toggleShowAllClick={this.toggleClick}/>
	      <Collapse isOpened={this.state.isOpened}>
	      	<URLInfo />
	      </Collapse>
	    </section>
	    
	  </div>
	  )
	}
}

export default TimeTrackerMain;
