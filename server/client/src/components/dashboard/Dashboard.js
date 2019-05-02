import React, { Component } from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/index';
import Chart from './Chart.js';


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
          type: 'area',
          backgroundColor: '#f4f8fa'
        },
        xAxis: {
          type: 'datetime',
          dateTimeLabelFormats: {
            // don't display the dummy year
            month: "%b '%y",
            year: '%b'
          },
          title: {
            text: 'Date'
          }
        },
        yAxis: {
          title: {
            text: 'Revenue'
          },
          min: 0
        },
        title: {
          text: 'Revenue Forecast'
        },
        subtitle: {
          text: 'Sean really likes ponies'
        },
        series: [
          {
            name: 'Closed',
            color: '#2eb347',
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
            name: 'Forecast',
            color: '#2c2c2c',

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
    this.props.getSuccessRate()
    this.props.getDealsInProgress()
    this.props.getAveragePerDeal()
    this.props.getTotalRevenueToDate()
    this.props.getAverageTimeToClose()
    this.props.getTopThreeClients()
  }

  render() {
    const { chartOptions, hoverData } = this.state;
    console.log("this i s", this.props)
    return (
      <React.Fragment>
        <div className="header-div">
          <h2>Dashboard</h2>
        </div>
       <Chart />
        <div className="info-container">
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
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    successRate: state.dashboardReducer.successRate,
    dealsInProgress: state.dashboardReducer.dealsInProgress,
    avgRevenuePerDeal: state.dashboardReducer.averageRevenuePerDeal,
    totalRevenue: state.dashboardReducer.totalRevenue,
    timeToCloseDeal: state.dashboardReducer.timeToCloseDeal,
    topThreeClients: state.dashboardReducer.topThreeClients,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSuccessRate: () => dispatch(actionTypes.getSuccessRate()),
    getDealsInProgress: () => dispatch(actionTypes.getDealsInProgress()),
    getAveragePerDeal: () => dispatch(actionTypes.getAveragePerDeal()),
    getTotalRevenueToDate: () => dispatch(actionTypes.getTotalRevenueToDate()),
    getAverageTimeToClose: () => dispatch(actionTypes.getAverageTimeToClose()),
    getTopThreeClients: () => dispatch(actionTypes.getTopThreeClients())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
