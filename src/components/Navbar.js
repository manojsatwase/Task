import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-default fixed">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <p id="logo">MS</p>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink exact={true} activeClassName="is-active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} activeClassName="is-active" to="/about">
                about
              </NavLink>
            </li>
            <li>
              <NavLink exact={true} activeClassName="is-active" to="/work">
                work
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
