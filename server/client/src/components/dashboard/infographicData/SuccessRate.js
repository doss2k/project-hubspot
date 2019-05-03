import React, { Component } from "react";
import numeral from "numeral";

export class SuccessRate extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="avgTimeToClose info-card">
        <p className="variable-info-p">
          {numeral(data).format("0,0")}
          <span className="days"> days</span>
        </p>
        <h4>Average time to close deal</h4>
      </div>
    );
  }
}

export default SuccessRate;
