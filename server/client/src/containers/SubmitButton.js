import React, { Component } from "react";

export class SubmitButton extends Component {
  render() {
    const { formClick } = this.props;
    return (
      <input
        className="submit-button"
        type="submit"
        value="submit"
        onClick={formClick}
      />
    );
  }
}

export default SubmitButton;
