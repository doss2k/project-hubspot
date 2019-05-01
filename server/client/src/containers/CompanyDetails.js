import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CompanyDetails extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mask show" />
        <div className="form-container show" style={{"position":"relative"}}>
          <div className="form-header">Company Details 
          <Link to="/"><i className="fas fa-times"></i></Link>
          </div>
        </div>
      </React.Fragment>

    )
  }
}
