import React from "react";

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
        <li className="nav-list-item">
          <a href="/dashboard" className="nav-link">
            Dashboard
          </a>
        </li>
        <li className="nav-list-item">
          <a href="/companies" className="nav-link">
            Companies
          </a>
        </li>
        <li className="nav-list-item">
          <a href="/deals" className="nav-link">
            Deals
          </a>
        </li>
      </ul>
    </nav>
  );
}
