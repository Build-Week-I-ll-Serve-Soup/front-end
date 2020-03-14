import React, { Component } from 'react';
import SignUpNav from './SignUpNav';

//reactstrap
import { Label, Input, Spinner, FormGroup, Alert } from 'reactstrap';

import { connect } from 'react-redux';

import { registerUser } from '../actions';

const dropdownStyle = {
  background: "#1bff89",
  width: "85%",
  border: "none",
  borderBottom: "1px solid black",
  borderRadius: "0",
  margin: "15px auto",
  paddingLeft: "0"
};

class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    role: ''
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log('handleSubmit:', { ...this.state });
    this.props.registerUser(
      {
        ...this.state,
        username: this.state.email
      },
      { ...this.props }
    );
  };

  render() {
    if (this.props.isRegistering) {
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
          <div className="FormCenter ">
            <SignUpNav />
            {/* Display a unsuccessful message signup failed */}
            {this.props.errorMessage && (
              <Alert color="danger">
                Registration failed, Please try again!
              </Alert>
            )}
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="FormField__Input"
                  placeholder="Enter your full name"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="FormField__Input"
                  placeholder="Enter your email"
                  name="email"
                  value={this.state.email}
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
                <FormGroup>
                  <Label for="role" className="FormField__Label">
                    Role
                  </Label>
                  <Input
                    type="select"
                    name="role"
                    value={this.state.role}
                    onChange={this.handleChange}
                    style={dropdownStyle}
                  >
                    <option>Select</option>
                    <option>Volunteer</option>
                    <option>Soup Kitchen Manager</option>
                  </Input>
                </FormGroup>
              </div>

              {/* <div className="FormField">
                <label className="FormField__CheckboxLabel">
                  <input
                    className="FormField__Checkbox"
                    type="checkbox"
                    name="hasAgreed"
                    value={this.state.hasAgreed}
                    onChange={this.handleChange}
                  />
                  I agree all statements in{' '}
                  <a href="#" className="FormField__TermsLink">
                    terms of service
                  </a>
                </label>
              </div> */}

              <div className="FormField">
                <button className="FormField__Button mr-20">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

//create mapStateToProps
const mapStateToProps = state => {
  return {
    isRegistering: state.isRegistering,
    message: state.message,
    errorMessage: state.errorMessage
  };
};

export default connect(
  mapStateToProps,
  { registerUser }
)(SignUpForm);
