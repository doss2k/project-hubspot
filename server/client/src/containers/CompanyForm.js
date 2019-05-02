import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions";
import SubmitButtom from "./SubmitButton";

export class CompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      logoUrl: "",
      city: "",
      state: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  //as data is typed, caputer in the state
  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  //on submit, send POST request to the server
  onFormSubmit(e) {
    e.preventDefault();
    this.props.createCompany(this.state);
    //reset form
    this.setState({
      companyName: "",
      logoUrl: "",
      city: "",
      state: ""
    });
  }

  render() {
    const { isActive, formClick } = this.props;
    return (
      <React.Fragment>
        <div className={isActive ? "mask show" : "mask"} />
        <div className={isActive ? "form-container show" : "form-container"}>
          <div className={isActive ? "form-card show" : "form-card"}>
            <div className="form-header-container">
              <div className="form-header">
                <div className="form-name">create company</div>
                <div className="fas fa-times" onClick={formClick} />
              </div>
            </div>
            <form className="form-field-container" onSubmit={this.onFormSubmit}>
              {" "}
              <p className="company-form-company-p">company name</p>
              <input
                type="text"
                name="companyName"
                className="form-field"
                placeholder="Enter company name"
                value={this.state.companyName}
                onChange={this.onInputChange}
              />
              <p className="company-form-logo-p">logo url</p>
              <input
                type="text"
                name="logoUrl"
                className="form-field"
                placeholder="Enter logo url"
                value={this.state.logoUrl}
                onChange={this.onInputChange}
              />
              <p className="company-form-city-p">city</p>
              <input
                type="text"
                name="city"
                className="form-field"
                placeholder="Enter city"
                value={this.state.city}
                onChange={this.onInputChange}
              />
              <p className="company-form-state-p">state</p>
              <input
                type="text"
                name="state"
                className="form-field"
                placeholder="Enter state"
                value={this.state.state}
                onChange={this.onInputChange}
              />
              <div className="form-footer-container">
                <SubmitButtom formClick={formClick} />
              </div>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createCompany: companyData =>
      dispatch(actionTypes.createCompany(companyData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CompanyForm);
