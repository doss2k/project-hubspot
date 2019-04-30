import React, { Component } from "react";

export class CompanyForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mask show" />
        <div className="form-container show">
          <div className="form-header">Title</div>
          <div className="form-field-container">
            <input
              type="text"
              name="name"
              className="form-field"
              placeholder="Enter company name"
            />
            <input
              type="text"
              name="logo"
              className="form-field"
              placeholder="Enter logo url"
            />
            <input
              type="text"
              name="city"
              className="form-field"
              placeholder="Enter city"
            />
            <input
              type="text"
              name="city"
              className="form-field"
              placeholder="Enter state"
            />
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default CompanyForm;
