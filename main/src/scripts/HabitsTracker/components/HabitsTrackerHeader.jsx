import React, {Component} from 'react';
import {SkyLightStateless} from 'react-skylight';
import {toggleModal} from "../actions/index";
import { connect } from 'react-redux';

class HabitsTrackerHeader extends Component {
	constructor() {
		super();
		this.state = {webUrl: "", choice:0, duration:0};


		this.handleSubmit = this.handleSubmit.bind(this);
		this.handlgeChoiceChange = this.handlgeChoiceChange.bind(this);
		this.handleWebUrlChange = this.handleWebUrlChange.bind(this);
		this.handleDurationChange = this.handleDurationChange.bind(this);
	}

	handleSubmit(event) {
		alert('webUrl, choice, duration: ' + this.state.webUrl + " " + this.state.choice + " " + this.state.duration);
		// this.props.toggleModal;
		event.preventDefault();
	}

	handlgeChoiceChange(event) {
		this.setState({choice: event.target.value});
	}

	handleWebUrlChange(event) {
		this.setState({webUrl: event.target.value});
	}	

	handleDurationChange(event) {
		this.setState({duration: event.target.value});
	}

	render() {

		var styles = {
	    width: '30%',
	    height: '30%',
	    left: '70%',
		};

		return (
		  <div>
		    <h1 className="mdc-card__title mdc-card__title--large text-muted">To-do list</h1>
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
	          	<label>Website address</label>
	          	<input type="text" className="form-control" onChange={this.handleWebUrlChange} placeholder="www.example.com" />
	          </div>
	          <div className="form-group">
	          	<label>This website is to be visited daily for: </label>
	          	<select className="form-control" onChange={this.handleChoiceChange}>
	          		<option value="0">at most</option>
	          		<option value="1">at least</option>
	          	</select>
	          </div>
	          <div className="form-group">
	          	<label>Duration (in minutes)</label>
	          	<input type="text" className="form-control" onChange={this.handleDurationChange} placeholder="15" />
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
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HabitsTrackerHeader)
