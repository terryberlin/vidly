import React from "react";
//import { Link, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img
        alt="qslogo"
        width="150"
        src="http://quikserve.reports.assets.s3-website-us-east-1.amazonaws.com/images/qs_logo_orange.png"
      />

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/movies">
                Prep Guide
              </NavLink>
            </React.Fragment>
          )}

          {user && user.isAdmin && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/orders">
                Orders
              </NavLink>
            </React.Fragment>
          )}

          {!user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-item nav-link" to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <NavLink className="nav-item nav-link" to="/logout">
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

//<NavLink className="nav-item nav-link" to="/customers">
//Customers
//</NavLink>
//<NavLink className="nav-item nav-link" to="/rentals">
//Rentals
//</NavLink> */}

//<NavLink className="nav-item nav-link" to="/profile">
//{user.name}
//</NavLink>
