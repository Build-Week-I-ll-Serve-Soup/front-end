import React, { Component } from 'react';
import SignUpNav from './SignUpNav';

import { login } from '../actions';

import { connect } from 'react-redux';

import { Spinner, Alert } from 'reactstrap';

class SignInForm extends Component {
  state = {
    username: '',
    password: ''
  };

  handleChange = e => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // console.log('The form was submitted with the following data:');
    // console.log(this.state);
    this.props.login(
      {
        ...this.state
      },
      { ...this.props }
    );
  };

  render() {
    //spinner from login to inventory page
    if (this.props.loginStart) {
      return (
        <div className="sign-up-container">
          <div className="App__Form signup-spinner-container">
            <Spinner style={{ width: '6rem', height: '6rem' }} color="light" />
          </div>
        </div>
      );
    }

    return (
      <div className="sign-up-container">
        <div className="App__Form">
          <div className="FormCenter">
            <SignUpNav />

            {/* Create a successful message when
            user is redirected from the sign-up page */}
            {this.props.successfulRegistration && (
              <Alert color="success">
                <h4>Registration successful, please Login!</h4>
              </Alert>
            )}

            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="text"
                  id="email"
                  className="FormField__Input"
                  placeholder="Enter your email"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="FormField__Input"
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="FormField">
                <button className="FormField__Button mr-20">Sign In</button>

                {/* Display a successful message if item was created or the button */}
                {this.props.loginError && (
                  <Alert color="danger">Wrong Credentials, try again!</Alert>
                )}

                {/* <p>{`${this.props.loginError}`}</p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginStart: state.loginStart,
    loginError: state.loginError,
    successfulRegistration: state.successfulRegistration
  };
};

export default connect(
  mapStateToProps,
  { login }
)(SignInForm);
