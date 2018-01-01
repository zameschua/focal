import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { updateUserAuthenticationStatus, getCalendarEvents } from "./actions";
import GoogleSignInButton from "./GoogleSignInButton";

const SignInBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`;

const SignInContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  height: 70vh;
  width: 40vw;
`;

const FocalTitle = styled.h5`
  font-size: 100px;
`;

class FirstSignIn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SignInBackground>
        <SignInContainer>
          <FocalTitle>focal</FocalTitle>
          <GoogleSignInButton
            getCalendarEvents={this.props.getCalendarEvents}
            updateUserAuthenticationStatus={
              this.props.updateUserAuthenticationStatus
            }
          />
        </SignInContainer>
      </SignInBackground>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  updateUserAuthenticationStatus,
  getCalendarEvents
})(FirstSignIn);
