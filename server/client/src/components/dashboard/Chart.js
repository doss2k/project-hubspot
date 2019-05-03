import React, { Component } from "react";
import { render } from "react-dom";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { connect } from 'react-redux';
import * as actionTypes from '../../actions/index';


// Get all deals


//  declared allDeals = []
//    Loop through all deals
//      declare closedWonDeals = []
//        if stage == 'Closed Won'
//        push into new array => [ {closedWonDeal}, {closedWonDeal}, {closedWonDeal} ]

// Loop through closedWonDeals array
//  declared chartData = []
//    get closedWonDeal.closeDate & closedWonDeal.amount 
//    push into chartData array => [ [closedDate, amount], [closedDate, amount], [closedDate, amount] ]

// Sort chartData.closedDate by ascending order
// Aggregate chartData.amount


function formatDate(d) {
  let newDate = d * 1000;
  return newDate;
}



class Chart extends Component {

  sortClosedWonDeals() {
    let closedWonDeals = []
    this.props.dealsDashboard.forEach((deal) => {
      if (deal.stage === 'Closed Won') {
        closedWonDeals.push(deal)
      } 
    })
    console.log('closedWonDeals: ', closedWonDeals)

    const chartData = closedWonDeals.map((deal) => {
      return [ deal.closeDate, deal.amount ]
  })
  console.log('chartData: ', chartData)

  
  let sortFunction = (a, b) => {
    if (a[0] === b[0]) {
      return 0;
    }
    else {
      return (a[0] < b [0]) ? -1 : 1;
    }
  }
  let sortedArray = chartData.sort(sortFunction);
  console.log("sortedArray: ", sortedArray)
  return sortedArray;
}





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

            data: [ [Date.UTC(2018, 10, 25), 100],
                [Date.UTC(2018, 11, 20), 141],
                [Date.UTC(2018, 12, 17), 520]]
      
          },
          // {
          //   name: 'Forecast',
          //   color: '#2c2c2c',

          //   fillOpacity: 0.4,
          //   data: [
          //     // [Date.UTC(2018, 10, 25), 100],
          //     // [Date.UTC(2018, 11, 20), 141],
          //     // [Date.UTC(2018, 12, 17), 520],
          //     // [Date.UTC(2019, 1, 2), 430],
          //     // [Date.UTC(2019, 2, 14), 682],
          //     // [Date.UTC(2019, 3,  6), 724],
          //     //  [Date.UTC(2019, 4, 24), 926],
          //     // [Date.UTC(2019, 5, 2), 1130],
          //     // [Date.UTC(2019, 6, 14), 1282],
          //     // [Date.UTC(2019, 7, 6), 1324],
          //     // [Date.UTC(2019, 8, 24), 1329],
          //     // [Date.UTC(2019, 9, 2), 1430],
          //     // [Date.UTC(2019, 10, 14), 1682]
          //     //   [Date.UTC(2019, 11,  6), 1724],
          //     //   [Date.UTC(2019, 12, 24), 1926],
          //     //   [Date.UTC(2019, 5, 4), 0],
          //     //   [Date.UTC(2019, 6, 14), 0],
          //     //   [Date.UTC(2019, 7,  6), 0],
          //     //   [Date.UTC(2019, 8, 14), 0],
          //     //   [Date.UTC(2019, 9, 24), 0],
          //     //   [Date.UTC(2019, 10, 4), 0],
          //     //   [Date.UTC(2019, 11, 14), 0],
          //     //   [Date.UTC(2019, 12,  6), 0]
          //   ]
          // }
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
    this.props.getAllDealsDashboard()
  
  }


  render() {
    const { chartOptions, hoveSrData } = this.state;
    

    if (this.props.dealsDashboard) {
      this.sortClosedWonDeals()
    }
    console.log("See all deals!!", this.props.dealsDashboard)
    return (
      <React.Fragment>
    
        <div className="chart-card">
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dealsDashboard: state.dealsReducer.dealsDashboard, //need to pass state to props?
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDealsDashboard: () => dispatch(actionTypes.getAllDealsDashboard()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
