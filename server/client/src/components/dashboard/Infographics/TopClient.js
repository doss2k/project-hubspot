import React, { Component } from 'react';

export class TopClient extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="topClient info-card">
        <img src={data} style={{ maxWidth: '200px' }} />
        <div>
          <h4>Top Client</h4>
        </div>
      </div>
    );
  }
}

export default TopClient;
