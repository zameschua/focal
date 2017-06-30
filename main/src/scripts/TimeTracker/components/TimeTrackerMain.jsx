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
	  <div className="mdc-card" style={{backgroundColor: "rgba(255,255,255,0.1)", borderRadius:"25px"}}>
	    <section className="mdc-card__primary">
		    <h1 className="mdc-card__title mdc-card__title--large text-white" style={{fontFamily:"Segoe UI",fontWeight:"bold"}}>Time Tracker</h1>
		  </section>
	    <section className="mdc-card__supporting-text">
	    	{/* Panel will resize causing doughnut to have no animation. TODO: fix weird bug */}
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
