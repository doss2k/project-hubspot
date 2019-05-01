import React, { Component } from "react";
import Button from "./Button";

export class CompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      logoUrl: '',
      city: '',
      state: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  //as data is typed, caputer in the state
  onInputChange(event) {
    this.setState({ [event.target.name] : event.target.value });
  }
  //on submit, send POST request to the server
  onFormSubmit(e) {
    e.preventDefault()
    console.log(e.target.vlaue)
    this.setState({
      companyName: e.target.value,
      logoUrl: e.target.value,
      city: e.target.value,
      state: e.target.value
    })
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
              name="companyName"
              className="form-field"
              placeholder="Enter company name"
              value={this.state.companyName}
              onChange={this.onInputChange}
            />
            <input
              type="text"
              name="logoUrl"
              className="form-field"
              placeholder="Enter logo url"
              value={this.state.logoUrl}
              onChange={this.onInputChange}
            />
            <input
              type="text"
              name="city"
              className="form-field"
              placeholder="Enter city"
              value={this.state.city}
              onChange={this.onInputChange}
            />
            <input
              type="text"
              name="state"
              className="form-field"
              placeholder="Enter state"
              value={this.state.state}
              onChange={this.onInputChange}
            />
            <Button title={"Create Company"} route={"/companies"} type="submit" />
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default CompanyForm;
