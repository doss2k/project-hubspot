import React, { Component } from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/index';

class Infographic extends Component {
  componentDidMount() {
    this.props.getSuccessRate();
    this.props.getDealsInProgress();
    this.props.getAveragePerDeal();
    this.props.getTotalRevenueToDate();
    this.props.getAverageTimeToClose();
    this.props.getTopThreeClients();
  }

  render() {
    return (
      <React.Fragment>
        {/* CARD: Total annual revenue */}
        <div className="totalRevToDate info-card">
          <p className="variable-info-p">{this.props.totalRevToDate}</p>
          <h4>Total revenue, year to date </h4>
        </div>

        {/* CARD: Avg revenue per deal */}
        <div className="avgRevPerDeal info-card">
          <p className="variable-info-p">{this.props.averageRevenuePerDeal}</p>
          <h4>Average revenue per deal </h4>
        </div>

        {/* CARD: Top client
      REVISED to return just the top client, not top 3, but route currently preserved as named (topThreeClients)
      Backend TODO: rename route to topClient to be more accurate? */}
        <div className="topClient info-card">
          <p className="variable-info-p">{this.props.topThreeClients}</p>
          <h4>Top client</h4>
        </div>

        {/* CARD: Avg time to close deal */}
        <div className="avgTimeToClose info-card">
          <p className="variable-info-p">
            {this.props.timeToCloseDeal}
            <span className="days"> days</span>
          </p>
          <h4>Average time to close deal </h4>
        </div>

        {/* CARD: Success rate */}
        <div className="successRate info-card">
          <p className="variable-info-p">
            {this.props.successRate}
            <span className="percentage">%</span>
          </p>
          <h4>Success rate </h4>
        </div>

        {/* CARD: Deals in progress */}
        <div className="dealsInProgress info-card">
          <p className="variable-info-p">{this.props.dealsInProgress}</p>
          <h4>Deals in progress </h4>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    successRate: state.dashboardReducer.successRate,
    dealsInProgress: state.dashboardReducer.dealsInProgress,
    avgRevenuePerDeal: state.dashboardReducer.averageRevenuePerDeal,
    totalRevenue: state.dashboardReducer.totalRevenue,
    timeToCloseDeal: state.dashboardReducer.timeToCloseDeal,
    topThreeClients: state.dashboardReducer.topThreeClients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSuccessRate: () => dispatch(actionTypes.getSuccessRate()),
    getDealsInProgress: () => dispatch(actionTypes.getDealsInProgress()),
    getAveragePerDeal: () => dispatch(actionTypes.getAveragePerDeal()),
    getTotalRevenueToDate: () => dispatch(actionTypes.getTotalRevenueToDate()),
    getAverageTimeToClose: () => dispatch(actionTypes.getAverageTimeToClose()),
    getTopThreeClients: () => dispatch(actionTypes.getTopThreeClients())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Infographic);
