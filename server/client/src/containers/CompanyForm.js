import React, { Component } from "react";

export class CompanyForm extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="form-container" />
        <form>
          <div>
            <label for="companyName">Company Name:</label>
            <input type="text" name="name" id="name" placeholder="Project Shift" />
          </div>
        </form>

      </React.Fragment>
    );
  }
}

export default CompanyForm;
