import React, { Component } from "react";

export class SubmitButton extends Component {
  render() {
    const { formClick } = this.props;
    return (
      <input
        className="submit-button"
        title={"Create Company"}
        route={"/companies"}
        type="submit"
        value="submit"
        onClick={formClick}
      />
    );
  }
}

export default SubmitButton;
