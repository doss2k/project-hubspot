import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions";
import SubmitButton from "./SubmitButton";

export class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: this.props.company[0][0].companyName || "",
      logoUrl: this.props.company[0][0].logoUrl || "",
      city: this.props.company[0][0].city || "",
      state: this.props.company[0][0].state || "",
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  //as data is typed, capture in the state
  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  //on submit, send POST request to the server
  onFormSubmit(e, showEdit) {
    e.preventDefault();
    this.props.editCompany(e.target.id, this.state)
    showEdit()
  }

  render() {
    const { isActive, showEdit } = this.props;

    return (
      <React.Fragment>
        <div className={isActive ? "mask show" : "mask"} />
        <div className={isActive ? "form-container show" : "form-container"}>
          <div className={isActive ? "form-card show" : "form-card"}>
            <div className="form-header-container">
              <div className="form-header">
                <div className="form-name">edit company</div>
                <div className="fas fa-times" onClick={showEdit} />
              </div>
            </div>
            <form className="form-field-container" id={this.props.company[0][0].companyId} onSubmit={e => this.onFormSubmit(e, showEdit)}>
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
                <SubmitButton  />
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
    editCompany: (companyId, companyData) =>
      dispatch(actionTypes.editCompany(companyId, companyData))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(EditForm);
