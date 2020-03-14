import React from 'react';

import { NavLink, Link } from 'react-router-dom';

class NavBar extends React.Component {
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
            exact
            to="/protected"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            View Inventory
          </NavLink>
          <NavLink
            to="/protected/addItem"
            activeClassName="PageSwitcher__Item--Active"
            className="PageSwitcher__Item"
          >
            Add item
          </NavLink>
          <Link
            to="/sign-in"
            className="PageSwitcher__Item"
            onClick={() => localStorage.setItem('userToken', '')}
          >
            Sign Out
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
