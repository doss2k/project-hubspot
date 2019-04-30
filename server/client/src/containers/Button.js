import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Button extends Component {
  render() {
    const { route, title } = this.props;
    return (
      <React.Fragment>
        <Link className="btn" to={route}>
          {title}
        </Link>
      </React.Fragment>
    );
  }
}

export default Button;
