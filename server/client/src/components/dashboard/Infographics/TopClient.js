import React, { Component } from "react";

export class TopClient extends Component {
  checkData() {
    if (this.props.data) {
      return <h4>Top Client</h4>;
    } else return <div />;
  }
  render() {
    const { data, altText } = this.props;
    return (
      <div className="topClient info-card">
        <img src={data} style={{ maxWidth: "200px" }} alt={altText} />
        <div>{this.checkData()}</div>
      </div>
    );
  }
}

export default TopClient;
