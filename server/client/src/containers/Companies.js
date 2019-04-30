import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../actions';

class Companies extends Component {

  // As soon as component mounts make call to redux to fetch all companies 
  componentDidMount() {
    this.props.getAllCompanies();
  }

  renderCompanies() {
    if (this.props.companies) {
      return this.props.companies.map(company => {
        return (
          <div key={company.companyId}>
            <h1 style={{"marginTop": "60px"}}> Hello: {company.companyName}</h1>
          </div>
        )
      })
  } else {
    return <div>Loading...</div>
  }
  }

  render() {
    return (
      <div>
        <h1 style={{"marginTop": "60px"}}>Companies</h1>
        <div>{this.renderCompanies()}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.companiesReducer.companies,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCompanies: () => dispatch(actionTypes.getAllCompanies()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies);