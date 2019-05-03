import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "./Button";
import CompanyForm from "./CompanyForm";

import * as actionTypes from "../actions";
import CompanyDetails from "./CompanyDetails";
import EditCompany from "./EditCompany";

let moment = require("moment");

class Companies extends Component {
  state = {
    showForm: false,
    showDetails: false,
    showEdit: false,
    companyName: "asc",
    city: "asc",
    updatedDate: "asc",
    state: "asc",
    createdDate: "asc",
    companyDetail: []
  };

  // As soon as component mounts make call to redux to fetch all companies
  componentDidMount() {
    this.props.getAllCompanies();
    this.props.getAllDeals();
  }

  //when create company is clicked, toggle show form
  formClick = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  detailClick = id => {
    //select a company by id
    const company1 = this.props.companies.find( (company) => {
      return (company.companyId === id)
    })

    const {deals} = this.props;
    const companyDeals = []

    for (let deal in deals) {
      if( deals[deal].companyId === id){
        companyDeals.push(deals[deal]);
      }
    }

    //set the state to the selected company and toggle show detail view
    const companyDetail = [[company1], [...companyDeals]]
    this.setState({ showDetails: !this.state.showDetails, companyDetail});
    console.log(this.state)
  };

  detailExit = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  showEdit = () => {
    this.setState({showEdit: !this.state.showEdit})
  }


  //when header is clicked, sort in ascending order
  onSort = e => {
    if (this.state[e] === "asc") {
      this.setState({ [e]: "desc" });
    } else {
      this.setState({ [e]: "asc" });
    }
    this.props.sortCompanies(e, this.state[e]);
  };

  renderCompanies() {
    if (this.props.companies) {
      return this.props.companies.map(company => {
        return (
          <div
            className="company-grid-row company-grid-items"
            key={company.companyId}
            onClick={() => this.detailClick(company.companyId)}
          >
            <div className="grid-title-items">
              <div className="grid-logo-and-name-container">
                <img
                  src={company.logoUrl}
                  style={{ width: "20px" }}
                  alt="company logo"
                />
                <div className="text-link company-grid-name">
                  {company.companyName}
                </div>
              </div>
            </div>
            <div className="grid-title-items">
              <p style={{ paddingLeft: "10px" }}>{company.city}</p>
            </div>
            <div className="grid-title-items">
              <p style={{ paddingLeft: "10px" }}>{company.state}</p>
            </div>
            <div className="grid-title-items">
              <p style={{ paddingLeft: "10px" }}>
                {moment(company.createdDate * 1000).format("MM/DD/YYYY")}
              </p>
            </div>
            <div className="grid-title-items">
              <p style={{ paddingLeft: "10px" }}>
                {moment(company.updatedDate * 1000).format("MM/DD/YYYY")}
              </p>
            </div>
          </div>
        );
      });
    } else {
      return <div>Loading...</div>;
    }
  }

  showModule() {
    if (this.state.showForm === true) {
      return (<CompanyForm
        isActive={this.state.showForm}
        formClick={this.formClick}
      />)
    }
    if (this.state.showDetails === true) {
      return (<CompanyDetails
          isActive={this.state.showDetails}
          detailClick={this.detailClick}
          showEdit={this.showEdit}
          detailExit={this.detailExit}
          company={this.state.companyDetail}
        />)
    }
    if (this.state.showEdit === true) {
      return (
        <EditCompany
          isActive={this.state.showEdit}
          showEdit={this.showEdit}
          formClick={this.formClick}
          // detailExit={this.detailExit}
          company={this.state.companyDetail}
        />
      )
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.showModule()}
        <div className="background-layer" />
        <div className="background-highlight-layer" />
        <div className="header-div">
          <h2 onClick={this.cComp}>Companies</h2>
          <Button title={"Create Company"} formClick={this.formClick} />
        </div>
        <div className="company-grid-container">
          <div className="company-grid-row company-grid-header">
            <div
              className="grid-title-items"
              onClick={() => this.onSort("companyName")}
              id="companyName"
            >
              <p style={{ marginLeft: "10px" }}>company</p>
              <div className="arrow-container">
                <i className="fas fa-sort-up" />
                <i className="fas fa-sort-down" />
              </div>
            </div>
            <div
              className="grid-title-items"
              onClick={() => this.onSort("city")}
              id="city"
            >
              <p style={{ marginLeft: "10px" }}>city</p>
              <div className="arrow-container">
                <i className="fas fa-sort-up" />
                <i className="fas fa-sort-down" />
              </div>
            </div>
            <div
              className="grid-title-items"
              onClick={() => this.onSort("state")}
              id="state"
            >
              <p style={{ marginLeft: "10px" }}>state</p>
              <div className="arrow-container">
                <i className="fas fa-sort-up" />
                <i className="fas fa-sort-down" />
              </div>
            </div>
            <div
              className="grid-title-items"
              onClick={() => this.onSort("createdDate")}
              id="createdDate"
            >
              <p style={{ marginLeft: "10px" }}>date created</p>
              <div className="arrow-container">
                <i className="fas fa-sort-up" />
                <i className="fas fa-sort-down" />
              </div>
            </div>
            <div
              className="grid-title-items"
              onClick={() => this.onSort("updatedDate")}
              id="updatedDate"
            >
              <p style={{ marginLeft: "10px" }}>last updated</p>
              <div className="arrow-container">
                <i className="fas fa-sort-up" />
                <i className="fas fa-sort-down" />
              </div>
            </div>
          </div>
          {this.renderCompanies()}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companiesReducer.companies,
    deals: state.dealsReducer.deals,
    company: state.companiesReducer.company
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCompanies: () => dispatch(actionTypes.getAllCompanies()),
    createCompany: formData => dispatch(actionTypes.createCompany(formData)),
    getAllDeals: () => dispatch(actionTypes.getAllDeals()),
    sortCompanies: (field, sort) =>
      dispatch(actionTypes.sortCompanies(field, sort))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);
