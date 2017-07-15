import React, {Component} from 'react';
import {SkyLightStateless} from 'react-skylight';
import {toggleModal, addHabitSite} from "../actions/index";
import { connect } from 'react-redux';

class HabitsTrackerHeader extends Component {
	constructor() {
		super();
		this.state = {webUrl: "", choice:0, duration:0};


		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChoiceChange = this.handleChoiceChange.bind(this);
		this.handleWebUrlChange = this.handleWebUrlChange.bind(this);
		this.handleDurationChange = this.handleDurationChange.bind(this);
	}

	handleSubmit(event) {
		let atMost = (this.state.choice == 0);
		this.props.addHabitSite(this.state.webUrl, atMost, this.state.duration);
		this.props.toggleModal();
		event.preventDefault();
	}

	handleChoiceChange(event) {
		this.setState({choice: event.target.value});
	}

	handleWebUrlChange(event) {
		this.setState({webUrl: event.target.value});
	}	

	handleDurationChange(event) {
		this.setState({duration: event.target.value});
	}

	render() {


		return (
		  <div>
	     	<button className="btn" type="button" onClick={this.props.toggleModal}>
          <span className="fa fa-plus"></span>
        </button>
				<SkyLightStateless
          isVisible={this.props.showAddSiteModal}
          onCloseClicked={this.props.toggleModal}
          onOverlayClicked={this.props.toggleModal}
          title="Add a new goal!"
        >	
        	<form onSubmit={this.handleSubmit}>
	          <div className="form-group">
	          	<label>Website address (a website that starts with "http://" or "https://")</label>
	          	<input type="url" className="form-control" onChange={this.handleWebUrlChange} placeholder="http://www.example.com" required pattern="https?://.+"/>
	          </div>
	          <div className="form-group">
	          	<label>This website is to be visited daily for: </label>
	          	<select value={this.state.choice} className="form-control" onChange={this.handleChoiceChange}>
	          		<option value="0">at most</option>
	          		<option value="1">at least</option>
	          	</select>
	          </div>
	          <div className="form-group">
	          	<label>Duration (in minutes)</label>
	          	<input type="number" className="form-control" onChange={this.handleDurationChange} placeholder="15" required/>
	          </div>
	          <button type="submit" className="btn btn-primary">Submit</button>	
	        </form>
	        
        </SkyLightStateless>
		  </div>
		)
	}
}

const mapStateToProps = state => {
  return {
  	showAddSiteModal: state.habitsTracker.showAddSiteModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleModal: () => {
      dispatch(toggleModal());
    },
    addHabitSite: (url, atMost, duration) => {
    	dispatch(addHabitSite(url,atMost,duration));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitsTrackerHeader)
