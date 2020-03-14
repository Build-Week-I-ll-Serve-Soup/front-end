import React from "react";
import { Button } from "reactstrap";
import "../App.css";
//importing link from react-router-dom
import { Link } from "react-router-dom";
import plus from '../images/plus-sign.png';
import edit from '../images/edit-icon.png';
import alert from '../images/alert-icon.png';
import ken from '../images/Ken.png';
import austin from '../images/Austin.png';
import fritz from '../images/Fritz.png';
import jordan from '../images/Jordan.png';
import shota from '../images/Shota.png';


const getStartedButtonStyle = {
  background: "#8cbd52",
  color: "white",
  border: "none"
};

const signInButtonStyle = {
  background: "white",
  color: "dodgerblue",
  border: "none"
};

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <nav>
        <span className="landing-page-nav-logo">I'll Serve Soup</span>
        <div className="landing-page-nav-buttons">
          <Link to="/sign-in">
            <Button style={signInButtonStyle}>Sign In</Button>
          </Link>
          <Link to="/sign-up">
            <Button style={getStartedButtonStyle}>Get Started</Button>
          </Link>
        </div>
      </nav>
      <div className="landing-page-hero">
        <h1>Soup Kitchen Inventory Management</h1>
        <h2>Make Keeping Track Of Your Inventory A Breeze</h2>
        <Link to="/sign-up">
          <Button style={getStartedButtonStyle}>Get Started</Button>
        </Link>
      </div>
      <div className="landing-page-content">
        <h3>Keeping Track of Inventory Can Be a Nightmare</h3>
        <p>
          Never run out of inventory again with I'll Serve Soup's soup kitchen inventory management software.
          Add new inventory items, update existing items, and get alerts when an inventory item is low.
          Always know what food you have, and how much you have of it with I'll Serve Soup.
        </p>
        <h3>Features</h3>
        <div className="landing-page-features">
          <div className="landing-page-features-feature">
            <img src={plus} alt="plus sign"/>
            <h4>Add Item</h4>
            <p>Add a new item to your inventory and specify the quantity and category.</p>
          </div>
          <div className="landing-page-features-feature">
            <img src={edit} alt="edit icon"/>
            <h4>Edit Item</h4>
            <p>Edit an item in your inventory to keep it up to date.</p>
          </div>
          <div className="landing-page-features-feature">
            <img src={alert} alt="alert icon"/>
            <h4>Alerts</h4>
            <p>Get an alert when an item is getting low in your inventory.</p>
          </div>
        </div>
        <h2>Our Team</h2>
        <div className="landing-page-team">
          <div className="landing-page-team-group">
            <h3>Front End</h3>
            <div className="landing-page-team-members">
              <div className="landing-page-team-member">
                <h4>Ken Ruf</h4>
                <img src={ken} alt="Ken Ruf"/>
                <a href="https://github.com/HaBuDeSu">GitHub</a>
              </div>
              <div className="landing-page-team-member">
                <h4>Fritz Gamboa</h4>
                <img src={fritz} alt="Fritz Gamboa"/>
                <a href="https://github.com/fritzgt">GitHub</a>
              </div>
              <div className="landing-page-team-member">
                <h4>Austin Breaux</h4>
                <img src={austin} alt="Austin Breaux"/>
                <a href="https://github.com/austinbro5">GitHub</a>
              </div>
            </div>
          </div>
          <div className="landing-page-team-group">
            <h3>Back End</h3>
            <div className="landing-page-team-members">
              <div className="landing-page-team-member">
                <h4>Jordan Hicks</h4>
                <img src={jordan} alt="Jordan Hicks"/>
                <a href="https://github.com/jthicks91">GitHub</a>

              </div>
              <div className="landing-page-team-member">
                <h4>Shota Kikozashvili</h4>
                <img src={shota} alt="Shota Kikozashvili"/>
                <a href="https://github.com/ShotaKiko">GitHub</a>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-page-footer">
        <div className="landing-page-footer-copyright">
          <span>© 2019 I'll Serve Soup</span>
        </div>
        <div className="landing-page-footer-legal">
          <span>Privacy | Terms of Service | Legal</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
