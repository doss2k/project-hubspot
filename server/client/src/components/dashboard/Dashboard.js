import React, { Component } from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

import SuccessRate from "./infographicData/SuccessRate";
import DealsInProgress from "./infographicData/DealsInProgress";
import AverageRevenue from "./infographicData/AverageRevenue";
import TotalRevenue from "./infographicData/YTDRevenue";
import TimeToClose from "./infographicData/TimeToClose";
import TopClient from "./infographicData/TopClient";

import { connect } from "react-redux";
import * as actionTypes from "../../actions/index";

function formatDate(d) {
  let newDate = d * 1000;
  return newDate;
}

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        chart: {
          type: "area",
          backgroundColor: "#fff"
        },
        xAxis: {
          type: "datetime",
          dateTimeLabelFormats: {
            // don't display the dummy year
            month: "%b '%y",
            year: "%b"
          },
          title: {
            text: "Date"
          }
        },
        yAxis: {
          title: {
            text: "Revenue"
          },
          min: 0
        },
        title: {
          text: "Revenue Forecast"
        },
        subtitle: {
          text: "Sean really likes ponies"
        },
        series: [
          {
            name: "Closed",
            color: "#2eb347",
            fillOpacity: 0.4,

            data: [
              // [Date.UTC(2018, 10, 25), 100],
              // [Date.UTC(2018, 11, 20), 141],
              // [Date.UTC(2018, 12, 17), 520],
              // [Date.UTC(2019, 1, 2), 430],
              // [Date.UTC(2019, 2, 14), 682],
              // [Date.UTC(2019, 3, 6), 724],
              // [Date.UTC(2019, 4, 24), 926],
              // [Date.UTC(2019, 5, 2), 1130]
              [formatDate(1551548269), 181000],
              [formatDate(1556645869), 203000],
              [formatDate(1551548269), 281000],
              [formatDate(1556645869), 303000]
            ]
          },
          {
            name: "Forecast",
            color: "#2c2c2c",

            fillOpacity: 0.4,
            data: [
              // [Date.UTC(2018, 10, 25), 100],
              // [Date.UTC(2018, 11, 20), 141],
              // [Date.UTC(2018, 12, 17), 520],
              // [Date.UTC(2019, 1, 2), 430],
              // [Date.UTC(2019, 2, 14), 682],
              // [Date.UTC(2019, 3,  6), 724],
              //  [Date.UTC(2019, 4, 24), 926],
              // [Date.UTC(2019, 5, 2), 1130],
              // [Date.UTC(2019, 6, 14), 1282],
              // [Date.UTC(2019, 7, 6), 1324],
              // [Date.UTC(2019, 8, 24), 1329],
              // [Date.UTC(2019, 9, 2), 1430],
              // [Date.UTC(2019, 10, 14), 1682]
              //   [Date.UTC(2019, 11,  6), 1724],
              //   [Date.UTC(2019, 12, 24), 1926],
              //   [Date.UTC(2019, 5, 4), 0],
              //   [Date.UTC(2019, 6, 14), 0],
              //   [Date.UTC(2019, 7,  6), 0],
              //   [Date.UTC(2019, 8, 14), 0],
              //   [Date.UTC(2019, 9, 24), 0],
              //   [Date.UTC(2019, 10, 4), 0],
              //   [Date.UTC(2019, 11, 14), 0],
              //   [Date.UTC(2019, 12,  6), 0]
            ]
          }
        ],
        plotOptions: {
          series: {
            point: {
              events: {}
            }
          }
        }
      },
      hoverData: null
    };
  }
  // ends here

  componentDidMount() {
    this.props.getSuccessRate();
    this.props.getDealsInProgress();
    this.props.getAveragePerDeal();
    this.props.getTotalRevenueToDate();
    this.props.getAverageTimeToClose();
    this.props.getTopThreeClients();
  }

  // passProps() {
  //   if (this.props.successRate) {
  //     return <SuccessRate data={this.props.successRate[0]} />;
  //    } else {
  //     return <div>Loading...</div>;
  //   }
  // }

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
      return <TotalRevenue data={data} />;
    } else return <div />;
  }

  passTopClientProps() {
    if (this.props.topThreeClients) {
      console.log(this.props.topThreeClients[0].logoUrl);
      let data = this.props.topThreeClients[0].logoUrl;
      return <TopClient data={data} />;
    } else return <div />;
  }

  render() {
    const { chartOptions, hoverData } = this.state;
    // if (this.props.successRate) {
    //   console.log(
    //     "this i s",
    //     this.props.successRate[0][Object.keys(this.props.successRate[0])[0]]
    //   );
    //   let sr = this.props.successRate[0][
    //     Object.keys(this.props.successRate[0])[0]
    //   ];
    //   console.log(sr);
    //   return <SuccessRate data={sr} />;
    // }
    return (
      <React.Fragment>
        <div className="background-layer" />
        <div className="background-highlight-layer" />
        <div className="header-div">
          <h2>Dashboard</h2>
        </div>
        <div className="chart-container">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
        <div className="info-graphic-container">
          {this.passTimeToCloseProps()}
          {this.passAvgRevProps()}
          {this.passDealsProps()}
          {this.passSuccessRateProps()}
          {this.passTotalRevProps()}
          {this.passTopClientProps()}
        </div>
        {/* <div className="info-container">
          <div className="info-card">
            <div className="avgTimeToClose">
              <p>30</p>
              <p>Average Time To Close Deal</p>
            </div>
          </div>
          <div className="info-card">
            <div className="avgRevPerDeal">
              <p>87300</p>
              <p>Average Revenue Per Deal</p>
            </div>
          </div>
          <div className="info-card">
            <div className="totalRevToDate">
              <p>5000000000</p>
              <p>Total Revenue To Date</p>
            </div>
          </div>
          <div className="info-card">
            <div className="dealsInProgress">
              <p>12</p>
              <p>Deals In Progress</p>
            </div>
          </div>
          <div className="info-card">
            <div className="successRate">
              <p>80</p>
              <p>Success Rate</p>
            </div>
          </div>
          <div className="info-card">
            <div className="topClient">
              <p>CISCO</p>
              <p>Top Client</p>
            </div>
          </div>
        </div> */}
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
