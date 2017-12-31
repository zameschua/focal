import React, { Component } from "react";
import { connect } from "react-redux";

import { updateUserAuthenticationStatus, getCalendarEvents } from "./actions";
import GoogleSignInButton from "./GoogleSignInButton";

class FirstSignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: null
    };
  }

  render() {
    return (
      <div
        className="container-fluid"
        style={{ height: "100vh", width: "100vw", backgroundColor: "white" }}
      >
        <div className="row justify-content-center text-center">
          <div className="col" style={{ marginTop: "17vh" }}>
            <h5 style={{ fontSize: "100px" }}>focal</h5>
            <GoogleSignInButton
              getCalendarEvents={this.props.getCalendarEvents}
              updateUserAuthenticationStatus={
                this.props.updateUserAuthenticationStatus
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    updateUserName: userName => {
      dispatch(updateUserName(userName));
    },
    updateUserAuthenticationStatus: (status) => {
      dispatch(updateUserAuthenticationStatus(status));
    },
    getCalendarEvents: () => {
      dispatch(getCalendarEvents());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstSignIn);
