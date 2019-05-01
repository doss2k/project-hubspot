import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../actions";

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
    // this.props.createCompany(this.state)

    // //reset form
    // this.setState({
    //   companyName: '',
    //   logoUrl: '',
    //   city: '',
    //   state: ''
    // })

  }

  render() {
    return (
    <React.Fragment>
        <div className="mask show" />
        <div className="form-container show">
          <div className="form-card">
            <div className="form-header-container">
              <div className="form-header">
                <div className="form-name">create company</div>
                <div className="fas fa-times" />
              </div>
            </div>
            <form className="form-field-container" onSubmit={this.onFormSubmit}>
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
              <button type="submit" value="Create Company" className="btn">Create Company</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCompany: (companyData => dispatch(actionTypes.createCompany(companyData))
    )};
};

export default connect(
  null,
  mapDispatchToProps
)(CompanyForm);