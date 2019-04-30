import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../actions";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

class Companies extends Component {
  //define column names for table
  colDefs = [
    { field: "companyName", sortable: true },
    { field: "city", sortable: true },
    { field: "state", sortable: true },
    { field: "createdDate", sortable: true },
    { field: "updatedDate", sortable: true }
  ];

  // As soon as component mounts make call to redux to fetch all companies
  componentDidMount() {
    this.props.getAllCompanies();
  }

  renderCompanies() {
    if (this.props.companies) {
      return (
        <AgGridReact columnDefs={this.colDefs} rowData={this.props.companies} />
      );
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    console.log("this.props ", this.props.companies);
    return (
      <React.Fragment>
        <div className="header-div">
          <h2>Companies</h2>
        </div>
        {/* <ul className="grid-title-bar">
          <li className="grid-title-items">logo</li>
          <li className="grid-title-items">company</li>
          <li className="grid-title-items">city</li>
          <li className="grid-title-items">date created</li>
          <li className="grid-title-items">last updated</li>
        </ul> */}
        <div className="company-grid-container">
          <div
            id="myGrid"
            style={{ marginTop: "10px", height: 450, width: "600" }}
            className="ag-theme-balham"
          >
            {this.renderCompanies()}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companiesReducer.companies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCompanies: () => dispatch(actionTypes.getAllCompanies())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);
