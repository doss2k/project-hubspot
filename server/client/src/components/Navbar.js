import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "../static/images/branding/logo_png_med.png";

export class Navbar extends Component {
  state = {
    showMenu: false
  };

  hamburgerClick = e => {
    console.log(this.state.showMenu);
    if (!this.state.showMenu) {
      this.setState({ showMenu: true });
    } else {
      this.setState({ showMenu: false });
    }
  };

  render() {
    return (
      <nav className="nav-container">
        <div className="nav-style-line" />
        <div className="nav-list">
          <Link className="nav-list-item" to="/dashboard">
            <img src={Image} alt="" width="45px" />
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
}

export default Navbar;
