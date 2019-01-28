import React from "react";
import { Link } from "react-router-dom";
import "./pages/style.css"

function NavTabs() {
  return (
    <nav className="navbar fixed-top bg-dark navbar-dark navbar-expand my-nav">
      <ul className="navbar-nav">

        {/* <li className="navbar-nav flex-row ml-md-auto d-none d-md-flex nav-item">

        </li> */}

        <li className="nav-item">
          <Link
            to="/"
            className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
          >
            About
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/projects"
            className={window.location.pathname === "/projects" ? "nav-link active" : "nav-link"}
          >
            Projects
        </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact"
            className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
            
        </Link>
        </li>
        </ul>
        <ul className="navbar-nav navbar-right ml-auto">
          <li className="nav-item active">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Orion Abrams
        </Link>
          </li>
          </ul>
        
      
    </nav>
  );
}

export default NavTabs;
