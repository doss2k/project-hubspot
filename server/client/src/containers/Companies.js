import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./Button";

import * as actionTypes from "../actions";

var moment = require('moment');


class Companies extends Component {
  constructor(props) {
    super(props);
  }

  // As soon as component mounts make call to redux to fetch all companies
  componentDidMount() {
    this.props.getAllCompanies();
  }

  //when header is clicked, sort in ascending order


  renderCompanies() {
    if (this.props.companies) {
      return this.props.companies.map(company => {
        return (
          <div className="grid-title-bar" key={company.companyId}>

            <div className="grid-title-items"><img src={company.logoUrl} style={{"width": "20%"}} alt="company logo" />{company.companyName}</div>
            <div className="grid-title-items">{company.city}</div>
            <div className="grid-title-items">{company.state}</div>
            <div className="grid-title-items">{moment(company.createdDate*1000).format('MM/DD/YYYY')}</div>
            <div className="grid-title-items">{moment(company.updatedDate*1000).format('MM/DD/YYYY')}</div>
          </div>
          
        )
      })
    } else {
      return <div>Loading...</div>;
    }
  }

  render() {
    let date = moment(1546562110).format('MM/DD/YY')
    console.log(date)
    return (
      <React.Fragment>
        <div className="header-div">
          <h2>Companies</h2>
          <Button title={"Create Company"} route={"/"} />
        </div>
        <div className="grid-title-bar">
          <div className="grid-title-items" onClick={this.onSort} id="companyName">
            <div>
              <i className="fas fa-sort-up"/>
              <i className="fas fa-sort-down"/>
            </div>
          company</div>
          <div className="grid-title-items">
            <div>
              <i className="fas fa-sort-up"/>
              <i className="fas fa-sort-down"/>
            </div>
          city</div>
          <div className="grid-title-items">
            <div>
              <i className="fas fa-sort-up"/>
              <i className="fas fa-sort-down"/>
            </div>
          state</div>
          <div className="grid-title-items">
            <div>
              <i className="fas fa-sort-up"/>
              <i className="fas fa-sort-down"/>
            </div>
          date created</div>
          <div className="grid-title-items">
            <div>
              <i className="fas fa-sort-up"/>
              <i className="fas fa-sort-down"/>
            </div>
          last updated</div>
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
