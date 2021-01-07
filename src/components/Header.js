import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="brand-name"> Jumga </h1>
      <div className="nav-links">
        <Router>
          <div className="nav-items">
          <NavLink to="/" className="nav-link">Browse</NavLink>
          <NavLink to="/" className="nav-link">Categories</NavLink>
          <NavLink to="/" className="nav-link">Members</NavLink>
          <NavLink to="/" className="nav-link">Memberships</NavLink>
          </div>
          <div className="nav-items-2">
          <Link to="/" className="nav-link">Post Products</Link>
          <Link to="/" className="nav-link">Register</Link>
          <Link to="/" className="nav-link">Sign in</Link>
          </div>
        </Router>

       
      </div>
    </header>
  );
}
