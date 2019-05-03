import React, { Component } from "react";

export class TopClient extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="avgTimeToClose info-card">
        <img src={data} style={{ maxWidth: "200px" }} />
        <h4>Top Client</h4>
      </div>
    );
  }
}

export default TopClient;
