import React, { Component } from 'react';
import numeral from 'numeral';

export class YTDRevenue extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="avgTimeToClose info-card">
        <p
          className="variable-info-p"
          style={{ fontSize: '4rem', textTransform: 'uppercase' }}
        >
          ${numeral(data).format('0.0a')}
        </p>
        <h4>Total revenue this year</h4>
      </div>
    );
  }
}

export default YTDRevenue;
