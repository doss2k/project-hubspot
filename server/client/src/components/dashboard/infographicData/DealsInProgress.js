import React, { Component } from "react";
import numeral from "numeral";

export class DealsInProgress extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="avgTimeToClose info-card">
        <p className="variable-info-p">
          {data}
          {/* <span className="days"> days</span> */}
        </p>
        <h4>Deals in progress</h4>
      </div>
    );
  }
}

export default DealsInProgress;
