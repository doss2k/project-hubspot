import React, { Component } from "react";
import { render } from "react-dom";
import Chart from './Chart.js';
import Infographic from './Infographic';



class Dashboard extends Component {

  componentDidMount() {

  }

  render() {
   
    return (
      <React.Fragment>

        <div className="header-div">
          <h2>Dashboard</h2>
        </div>

       <Chart />
       <Infographic />

      </React.Fragment>
    );
  }
}

export default Dashboard;