import React, { Component } from "react";
import {Link} from "react-router-dom";

class Header extends Component {
  render(){return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Party Planner
      </Link>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link" to="/Movies">
            Movie Planner
          </Link>
          <Link className="nav-item nav-link" to="/Food">
            Food Planner
          </Link>
        </div>
      </div>
    </nav>
  );
  }
};

export default Header;
