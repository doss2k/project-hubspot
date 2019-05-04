import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import * as actionTypes from "../../actions/index";
import AverageRevenue from "./Infographics/AverageRevenue";
import DealsInProgress from "./Infographics/DealsInProgress";
import SuccessRate from "./Infographics/SuccessRate";
import TimeToClose from "./Infographics/TimeToClose";
import TopClient from "./Infographics/TopClient";
import YTDRevenue from "./Infographics/YTDRevenue";
import Chart from "./Chart.js";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getSuccessRate();
    this.props.getDealsInProgress();
    this.props.getAveragePerDeal();
    this.props.getTotalRevenueToDate();
    this.props.getAverageTimeToClose();
    this.props.getTopThreeClients();
  }

  passTimeToCloseProps() {
    if (this.props.timeToCloseDeal) {
      let data = this.props.timeToCloseDeal[0][
        Object.keys(this.props.timeToCloseDeal[0])[0]
      ];
      console.log(this.props);
      return <TimeToClose data={data} />;
    } else return <div />;
  }

  passAvgRevProps() {
    if (this.props.avgRevenuePerDeal) {
      let data = this.props.avgRevenuePerDeal[0][
        Object.keys(this.props.avgRevenuePerDeal[0])[0]
      ];
      return <AverageRevenue data={data} />;
    } else return <div />;
  }

  passDealsProps() {
    if (this.props.dealsInProgress) {
      let data = this.props.dealsInProgress[0][
        Object.keys(this.props.dealsInProgress[0])[0]
      ];
      return <DealsInProgress data={data} />;
    } else return <div />;
  }

  passSuccessRateProps() {
    if (this.props.successRate) {
      let data = this.props.successRate[0][
        Object.keys(this.props.successRate[0])[0]
      ];
      return <SuccessRate data={data} />;
    } else return <div />;
  }

  passTotalRevProps() {
    if (this.props.totalRevenue) {
      let data = this.props.totalRevenue[0][
        Object.keys(this.props.totalRevenue[0])[0]
      ];
      return <YTDRevenue data={data} />;
    } else return <div />;
  }

  passTopClientProps() {
    if (this.props.topThreeClients) {
      console.log(this.props);
      let data = this.props.topThreeClients[0].logoUrl;
      let altText = this.props.topThreeClients[0].companyName;
      return <TopClient data={data} altText={altText} />;
    } else return <div />;
  }

  render() {
    return (
      <React.Fragment>
        <div className="background-layer" />
        <div className="background-highlight-layer" />
        <div className="header-div">
          <h2>Dashboard</h2>
        </div>

        <Chart />
        {/* <Infographic /> */}
        <div className="info-graphic-container">
          {this.passTotalRevProps()}
          {this.passAvgRevProps()}
          {this.passTopClientProps()}
          {this.passTimeToCloseProps()}
          {this.passSuccessRateProps()}
          {this.passDealsProps()}
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
)(Dashboard);
