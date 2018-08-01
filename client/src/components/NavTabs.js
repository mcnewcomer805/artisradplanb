import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";


const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    {/* <li className="nav-item">
        <span to="" className={
          window.location.pathname === "" ? "nav-link active" : "nav-link"
        }>
        Placeholder
        </span>
    </li> */}

    <li className="nav-item">
      <Link
        to="/login"
        className={
          window.location.pathname === "/login" ? "nav-link active" : "nav-link"
        }
      >
        Log In/Sign Up
      </Link>
    </li>




  </ul>
);

export default NavTabs;
