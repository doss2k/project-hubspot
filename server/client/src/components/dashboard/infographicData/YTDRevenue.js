import React, { Component } from "react";
import numeral from "numeral";

export class TotalRevenue extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="avgTimeToClose info-card">
        <p
          className="variable-info-p"
          style={{ fontSize: "4rem", textTransform: "uppercase" }}
        >
          ${numeral(data).format("0.0a")}
        </p>
        <h4>Year to date</h4>
      </div>
    );
  }
}

export default TotalRevenue;
