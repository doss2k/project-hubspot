import React, { Component } from 'react';
import SubmitButton from "./SubmitButton";
import { connect } from "react-redux";
import * as actionTypes from "../actions";

class CompanyDetails extends Component {
  onDelete(e) {
    console.log('delete')
    this.props.deleteCompanyById(e)
    
  }

  render() {
    const { isActive, detailClick } = this.props;
    if (!this.props.company) {
      return <div>Please select a company</div>
    }
    const { companyName, logoUrl, city, state, companyId } = this.props.company[0]
    return (

      <React.Fragment>
        <div className={isActive ? "mask show" : "mask"} />
          <div className={isActive ? "form-container show" : "form-container"}>
            <div className={isActive ? "form-card show" : "form-card"}>
              <div className="form-header-container">
                <div className="form-header">
                  <div className="form-name">{companyName}</div>
                  <div className="fas fa-times" onClick={detailClick} />
                </div>
              </div>
              <div className="form-field-container">
                <img src={logoUrl} style={{ 'width': '150px', 'height':'150px', 'overflow': 'hidden', 'borderRadius': '50%' }} />
                <p>{city}, {state} </p>
              </div>
              <div className="form-footer-container">
              <input type="submit" value="delete" detailClick={detailClick} style={{'background': 'red', 'color': 'white'}} onClick={() => this.onDelete(companyId)}/>
                <SubmitButton formClick={detailClick} />
              </div>
            </div>
            </div>

      </React.Fragment>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteCompanyById: company =>
      dispatch(actionTypes.deleteCompanyById(company))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CompanyDetails);