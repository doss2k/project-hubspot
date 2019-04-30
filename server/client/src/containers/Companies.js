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
            <tr key={company.companyId}> 
              <td><img src={company.logoUrl} /></td>
              <td>{company.companyName}</td>
              <td>{company.city}</td>
              <td>{company.state}</td>
              <td>{company.createdDate}</td>
              <td>{company.updatedDate}</td>
            </tr>
        )
      })
  } else {
    return <div>Loading...</div>
  }
  }

  render() {
    console.log(this.props.companies)
    return (
      <div>
        <h1 style={{"marginTop": "60px"}}>Companies</h1>
        <table>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Created Date</th>
            <th>Updated Date</th>
          </tr>
          {this.renderCompanies()} 
        </table>
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