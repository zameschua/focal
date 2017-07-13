import React, { Component } from 'react';
import {  connect  } from 'react-redux';

import { updateUserName } from '../actions/updateUserName';

class RequestName extends Component {
  constructor() {
  	super();
  	this.state = {
  		inputField : null,
  	}
  }

  handleSubmit(e) {
  	e.preventDefault();
  	this.props.updateUserName(this.state.inputField.value);
  }

  render() {
	  return (
	    <div>
		    <form className="mdc-textfield" onSubmit={this.handleSubmit.bind(this)}>
		      <input className="mdc-textfield__input"
		      	type="text" 
		      	id="input"
		      	ref={node => {
            	this.state.inputField = node;
          	}} />
		      <label className="mdc-textfield__label" htmlFor="input">What's your name?</label>
		    </form>
		  </div>
	  );
	}
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserName: (userName) => {
      dispatch(updateUserName(userName));
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestName)