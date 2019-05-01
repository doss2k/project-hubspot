import React, { Component } from "react";
import Button from "./Button";

export class CompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      logo: '',
      city: '',
      state: ''
    }
  }
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
              value={this.state.name}
            />
            <input
              type="text"
              name="logo"
              className="form-field"
              placeholder="Enter logo url"
              value={this.state.logo}
            />
            <input
              type="text"
              name="city"
              className="form-field"
              placeholder="Enter city"
              value={this.state.city}
            />
            <input
              type="text"
              name="city"
              className="form-field"
              placeholder="Enter state"
              value={this.state.state}
            />
            <Button title={"Create Company"} route={"/companies"} />
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default CompanyForm;
