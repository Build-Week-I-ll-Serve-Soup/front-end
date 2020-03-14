import React from 'react';

import { NavLink, Link } from 'react-router-dom';

class SignUpNav extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <div className="FormTitle">
          <Link to="/" className="FormTitle__Link">
            I'll Serve-Soup
          </Link>
        </div>
        <div className="PageSwitcher">
          <NavLink
            to="/sign-in"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/sign-up"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SignUpNav;
