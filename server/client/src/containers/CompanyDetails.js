import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CompanyDetails extends Component {
  render() {
    const { isActive, detailClick } = this.props;
    if (!this.props.company) {
      return <div>Please select a company</div>
    }
    const { companyName, logoUrl, city, state } = this.props.company[0]
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
                <img src={logoUrl} />
              
              </div>
            </div>
            </div>

      </React.Fragment>

    )
  }
}
