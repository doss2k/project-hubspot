import React, { Component } from "react";
import numeral from "numeral";

export class AverageRevenue extends Component {
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
        <h4>Average revenue per deal</h4>
      </div>
    );
  }
}

export default AverageRevenue;
