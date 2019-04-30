import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../actions";


class Companies extends Component {


  // As soon as component mounts make call to redux to fetch all companies
  componentDidMount() {
    this.props.getAllCompanies();
  }

  renderCompanies() {
    if (this.props.companies) {
      return this.props.companies.map(company => {
        return (
          <div className="grid-title-bar" key={company.companyId}>
            <div className="grid-title-items"><img src={company.logoUrl} style={{"width": "50%"}} alt="company logo" /></div>
            <div className="grid-title-items">{company.companyName}</div>
            <div className="grid-title-items">{company.city}</div>
            <div className="grid-title-items">{company.state}</div>
            <div className="grid-title-items">{company.createdDate}</div>
            <div className="grid-title-items">{company.updatedDate}</div>
          </div>
          
        )
      })
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="header-div">
          <h2>Companies</h2>
        </div>
        <div className="grid-title-bar">
          <div className="grid-title-items">logo</div>
          <div className="grid-title-items">company</div>
          <div className="grid-title-items">city</div>
          <div className="grid-title-items">state</div>
          <div className="grid-title-items">date created</div>
          <div className="grid-title-items">last updated</div>
        </div>
        {this.renderCompanies()}
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
