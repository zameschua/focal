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
	    <div className="container-fluid" style={{height: "100vh", width:"100vh"}}>
        <div className="row justify-content-center text-center">
          <div className="col" style={{marginTop: "17vh"}}>
            <h5 style={{fontSize: "100px"}}>Hey there,</h5>
            <h5 style={{fontSize: "70px"}}>What's your name?</h5>
    		    <form className="mdc-textfield" onSubmit={this.handleSubmit.bind(this)}>
    		      <input className="mdc-textfield__input text-center"
    		      	type="text" 
    		      	id="input"
    		      	ref={node => {
                	this.state.inputField = node;
              	}} 
                style={{fontSize: "70px", width: "40vw", marginTop:"10vh"}}/>
    		    </form>
    		  </div>
        </div>
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