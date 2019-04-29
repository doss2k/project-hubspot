import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../actions';

class Companies extends Component {

  // As soon as component mounts make call to redux to fetch all companies 
  componentDidMount() {
    this.props.getAllCompanies();
  }

  render() {
    return (
      <div>
        <h1>Companies data is available in 'this.props.companies'</h1>
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