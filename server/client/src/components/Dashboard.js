import React, { Component } from 'react';
import { render } from 'react-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';


function formatDate(d)
 {
  var date = new Date(d)
  var dd = date.getDate(); 
  var mm = date.getMonth()+1;
  var yyyy = date.getFullYear(); 
  if(dd<10){dd='0'+dd} 
  if(mm<10){mm='0'+mm};
  return d = yyyy+'/'+mm+'/'+dd
}

class Dashboard extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        chart: {
            type: 'area'
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { // don't display the dummy year
              month: '%b \'%y',
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
            text: 'Sean likes ponies'
        },
        series: [ {
            name: "Closed",
            color: '#000099',            
            fillOpacity: 0.5,

             data: [
              [Date.UTC(2018, 10, 25), 100],
              [Date.UTC(2018, 11, 20), 141],
              [Date.UTC(2018, 12, 17), 520],
              [Date.UTC(2019, 1, 2), 430],
              [Date.UTC(2019, 2, 14), 682],
              [Date.UTC(2019, 3,  6), 724],
              [Date.UTC(2019, 4, 24), 926],
              [Date.UTC(2019, 5, 2), 1130],
            //     [formatDate(1538329069*1000), 100],
            //     [formatDate(1548869869*1000), 141],
            //     [formatDate(1551548269*1000), 141],
            //     [formatDate(1556645869*1000), 200],
             ]
          },{
            name: "Forecast",
            color: '#000199',            

            fillOpacity: 0.2,
            data: [
            //   [Date.UTC(2018, 10, 25), 100],
            //   [Date.UTC(2018, 11, 20), 141],
            //   [Date.UTC(2018, 12, 17), 520],
            //   [Date.UTC(2019, 1, 2), 430],
            //   [Date.UTC(2019, 2, 14), 682],
            //   [Date.UTC(2019, 3,  6), 724],
            //    [Date.UTC(2019, 4, 24), 926],
              [Date.UTC(2019, 5, 2), 1130],
              [Date.UTC(2019, 6, 14), 1282],
              [Date.UTC(2019, 7,  6), 1324],
              [Date.UTC(2019, 8, 24), 1329],
              [Date.UTC(2019, 9, 2), 1430],
              [Date.UTC(2019, 10, 14), 1682],
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
          },],
        plotOptions: {
          series: {
            point: {
              events: {
              }
            }
          }
        }
      },
      hoverData: null
    };
  }
// ends here


  render() {
    const { chartOptions, hoverData } = this.state;
    
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    )
  }
}

export default Dashboard;
