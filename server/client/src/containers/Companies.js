import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./Button";
import CompanyForm from "./CompanyForm";

import * as actionTypes from "../actions";
import CompanyDetails from "./CompanyDetails";

let moment = require("moment");

class Companies extends Component {
  constructor(props) {
    super(props);
  }

  // As soon as component mounts make call to redux to fetch all companies
  componentDidMount() {
    this.props.getAllCompanies();
  }

  cComp = () => {
    console.log("hiii")
    this.props.createCompany({
      "companyName": "MONOIS",
      "logoUrl": "testasdf stage",
      "city": "dfasdf",
      "state": "fasdfasdf"
    })
  }

  //when header is clicked, sort in ascending order

  renderCompanies() {
    if (this.props.companies) {
      return this.props.companies.map(company => {
        return (
          <div
            className="company-grid-row company-grid-items"
            key={company.companyId}
          >
            <div className="grid-title-items">
              <div className="grid-logo-and-name-container">
                <img
                  src={company.logoUrl}
                  style={{ width: "20px" }}
                  alt="company logo"
                />
                <div className="text-link company-grid-name">
                  {company.companyName}
                </div>
              </div>
            </div>
            <div className="grid-title-items">{company.city}</div>
            <div className="grid-title-items">{company.state}</div>
            <div className="grid-title-items">
              {moment(company.createdDate * 1000).format("MM/DD/YYYY")}
            </div>
            <div className="grid-title-items">
              {moment(company.updatedDate * 1000).format("MM/DD/YYYY")}
            </div>
          </div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return (
      <React.Fragment>
        <CompanyForm />
        <div className="header-div">
          <h2 onClick={this.cComp}>Companies</h2>
          <Button title={"Create Company"} route={"/"} />
        </div>
        <div className="company-grid-container">
          <div className="company-grid-row company-grid-header">
            <div
              className="grid-title-items"
              onClick={this.onSort}
              id="companyName"
            >
              company
              <div className="arrow-container">
                <i className="fas fa-sort-up" />
                <i className="fas fa-sort-down" />
              </div>
            </div>
            <div className="grid-title-items">
              city
              <div className="arrow-container">
                <i className="fas fa-sort-up" />
                <i className="fas fa-sort-down" />
              </div>
            </div>
            <div className="grid-title-items">
              state
              <div className="arrow-container">
                <i className="fas fa-sort-up" />
                <i className="fas fa-sort-down" />
              </div>
            </div>
            <div className="grid-title-items">
              date created
              <div className="arrow-container">
                <i className="fas fa-sort-up" />
                <i className="fas fa-sort-down" />
              </div>
            </div>
            <div className="grid-title-items">
              last updated
              <div className="arrow-container">
                <i className="fas fa-sort-up" />
                <i className="fas fa-sort-down" />
              </div>
            </div>
          </div>
          {this.renderCompanies()}
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
    getAllCompanies: () => dispatch(actionTypes.getAllCompanies()),
    createCompany: (formData) => dispatch(actionTypes.createCompany(formData))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);
