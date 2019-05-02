import React from "react";
import { Link } from "react-router-dom";
import Image from "../static/images/branding/logo_png_med.png";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-style-line" />
      <div className="nav-list">
        <Link className="nav-list-item" to="/dashboard">
          <img src={Image} alt="" width="40px" />
        </Link>
        <Link className="nav-list-item" to="/dashboard">
          Dashboard
        </Link>
        <Link className="nav-list-item" to="/companies">
          Companies
        </Link>
        <Link className="nav-list-item" to="/deals">
          Deals
        </Link>
      </div>
    </nav>
  );
}
