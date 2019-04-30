import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-style-line" />
      <ul className="nav-list">
        <li className="nav-list-item nav-logo">
          <a href="/dashboard" className="branding-link nav-link">
            <img
              src="https://cdn.freebiesupply.com/logos/large/2x/pony-3-logo-png-transparent.png"
              width="40px"
            />
          </a>
        </li>
        <Link className="nav-list-item" to="/dashboard">
          Dashboard
        </Link>
        <Link className="nav-list-item" to="/companies">
          Companies
        </Link>
        <Link className="nav-list-item" to="/deals">
          Deals
        </Link>
      </ul>
    </nav>
  );
}
