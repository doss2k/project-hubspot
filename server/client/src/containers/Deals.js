import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../actions';

class Deals extends Component {

  componentDidMount() {
    // As soon as component mounts make call to redux to fetch all deals
    this.props.getAllDeals();
  }


  render() {
    return (
      <div>
        <p>Deals data in 'this.props.deals'</p>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    deals: state.dealsReducer.deals,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDeals: () => dispatch(actionTypes.getAllDeals()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deals);