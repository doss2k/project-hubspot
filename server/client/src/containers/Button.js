import React, { Component } from "react";

export class Button extends Component {
  render() {
    const { formClick, title } = this.props;
    return (
      <div className="btn" onClick={formClick}>
        {title}
      </div>
    );
  }
}

export default Button;
