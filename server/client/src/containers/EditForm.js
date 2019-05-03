import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions";
import SubmitButtom from "./SubmitButton";

export class EditForm extends Component {
  state = {
    companyName: "",
    logoUrl: "",
    city: "",
    state: ""
  };
    
  onStart(companyName, logoUrl, city, state) {
    this.setState({
      companyName: companyName,
      logoUrl: logoUrl,
      city: city,
      state: state

    })
  }
  //as data is typed, capture in the state
  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  //on submit, send POST request to the server
  onFormSubmit(e) {
    console.log(e)
    e.preventDefault();
  }

  render() {
    const { isActive, exitEdit } = this.props;
    const { companyName, logoUrl, city, state}= this.props.company;

    return (
      <React.Fragment>
        <div className={isActive ? "mask show" : "mask"} />
        <div className={isActive ? "form-container show" : "form-container"}>
          <div className={isActive ? "form-card show" : "form-card"}>
            <div className="form-header-container">
              <div className="form-header">
                <div className="form-name">edit company</div>
                <div className="fas fa-times" onClick={exitEdit} />
              </div>
            </div>
            <form className="form-field-container" onSubmit={this.onFormSubmit}>
              {" "}
              <p className="company-form-company-p">company name</p>
              <input
                type="text"
                name="companyName"
                className="form-field"
                placeholder={companyName}
                value={this.state.companyName}
                onChange={this.onInputChange}
              />
              <p className="company-form-logo-p">logo url</p>
              <input
                type="text"
                name="logoUrl"
                className="form-field"
                placeholder={logoUrl}
                value={this.state.logoUrl}
                onChange={this.onInputChange}
              />
              <p className="company-form-city-p">city</p>
              <input
                type="text"
                name="city"
                className="form-field"
                placeholder={city}
                value={this.state.city}
                onChange={this.onInputChange}
              />
              <p className="company-form-state-p">state</p>
              <input
                type="text"
                name="state"
                className="form-field"
                placeholder={state}
                value={this.state.state}
                onChange={this.onInputChange}
              />
              <div className="form-footer-container">
                <SubmitButtom  />
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
)(EditForm);
