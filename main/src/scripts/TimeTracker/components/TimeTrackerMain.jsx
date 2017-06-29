import React, {  Component  }  from 'react'
import ShowURL from "../containers/ShowURL"
import URLInfo from "./URLInfo"
import {Collapse} from 'react-collapse';
/**
const TimeTrackerMain = () => (
  <div className="mdc-card" style={{backgroundColor: "rgba(192,192,192,0.4)"}}>
    <section className="mdc-card__primary">
	    <h1 className="mdc-card__title mdc-card__title--large text-white">Time Tracker</h1>
	  </section>
    <section className="mdc-card__supporting-text">
      <ShowURL />
      <button onClick={toggle}>Open</button>
      <Collapse isOpened={isOpened}>
      	<URLInfo />
      </Collapse>
    </section>
    
  </div>
);**/

class TimeTrackerMain extends Component {
	constructor() {
		super();
		this.state = {isOpened: false};
		this.toggleClick = this.toggleClick.bind(this);
	}

	toggleClick() {
		this.setState({isOpened: !this.state.isOpened});
		console.log(this.state.isOpened);
	}

	render() {
		return (
	  <div className="mdc-card" style={{backgroundColor: "rgba(0,0,0,0.2)"}}>
	    <section className="mdc-card__primary">
		    <h1 className="mdc-card__title mdc-card__title--large text-white">Time Tracker</h1>
		  </section>
	    <section className="mdc-card__supporting-text">
	      <ShowURL />
	      <button onClick={this.toggleClick}>Open</button>
	      <Collapse isOpened={this.state.isOpened}>
	      	<URLInfo />
	      </Collapse>
	    </section>
	    
	  </div>
	  )
	}
}

export default TimeTrackerMain;
