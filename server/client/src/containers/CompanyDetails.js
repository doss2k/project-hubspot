import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionTypes from "../actions";

class CompanyDetails extends Component {
  onDelete(e) {
    this.props.deleteCompanyById(e)
    this.props.detailClick()
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
                  <div className="fas fa-pencil-alt" style={{'margin': "5px"}}/>
                  <div className="fas fa-times" onClick={detailClick} />
                </div>
              </div>
              <div className="form-field-container">
                <img src={logoUrl} alt="company logo"style={{ 'width': '150px', 'height':'150px', 'overflow': 'hidden', 'borderRadius': '50%' }} />
                <p>{city}, {state} </p>
              </div>
              <div className="form-footer-container">
                <input type="submit" value="delete" style={{'background': 'red', 'color': 'white'}} onClick={() => this.onDelete(companyId)}/>
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