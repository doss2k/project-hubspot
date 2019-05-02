import React, { Component } from "react";

export class TestInfoBlock extends Component {
  render() {
    const total = 30;
    return (
      <div className="avgTimeToClose info-card">
        <p className="variable-info-p">
          {total}
          <span className="days"> days</span>
        </p>
        <h4>Average time to close deal </h4>
      </div>
    );
  }
}

export default TestInfoBlock;
