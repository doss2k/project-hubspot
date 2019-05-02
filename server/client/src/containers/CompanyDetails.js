import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CompanyDetails extends Component {
  render() {
    const { isActive, formClick } = this.props;
    return (
      <React.Fragment>
        <div className={isActive ? "mask show" : "mask"} />
          <div className={isActive ? "form-container show" : "form-container"}>
            <div className={isActive ? "form-card show" : "form-card"}>
              <div className="form-header-container">
                <div className="form-header">
                  <div className="form-name">company Details</div>
                  <div className="fas fa-times" onClick={formClick} />
                </div>
              </div>
            </div>
          </div>

      </React.Fragment>

    )
  }
}
