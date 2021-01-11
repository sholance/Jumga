import React, {useState} from "react";
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  NavLink,
  Link,
} from "react-router-dom";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header>
      <NavLink to="/">
        <h1 className="brand-name"> Jumga </h1>
        </NavLink>
      <div className="nav-links">
        {/* <Router> */}
          <div className="nav-items">
            <NavLink to="/Browse" className="nav-link">
              Explore
            </NavLink>
            <NavLink to="/Categories" className="nav-link">
              Categories
            </NavLink>
            <NavLink to="/Members" className="nav-link">
              Sellers
            </NavLink>
            <NavLink to="/Membership" className="nav-link">
              Memberships
            </NavLink>
          </div>
          <div className="nav-items-2">
            <Link to="/" className="nav-link">
              Become a Seller
            </Link>
            <Link to="/" className="nav-link">
              Register
            </Link>
            <Link to="/Login" className="nav-link">
              Sign in
            </Link>
          </div>
        {/* </Router> */}
      </div>
    </header>
  );
}
