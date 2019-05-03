import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionTypes from "../actions";

const formatter = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD"
});

class CompanyDetails extends Component {
  onDelete(e) {
    this.props.deleteCompanyById(e);
    this.props.detailClick();
    window.location.reload();
  }

  editMode(e, detailExit, showEdit) {
    detailExit()
    showEdit()

  }

  renderDeals() {
    if (this.props.company) {
      return this.props.company[1].map(deal => {
        return (
          <div
            className="company-grid-row company-grid-items"
            key={deal.dealId}
            style={{ pointerEvents: "none" }}
          >
            <div className="grid-title-items">
              <div
                className="grid-logo-and-name-container"
                style={{ marginLeft: "0px" }}
              >
                <div
                  className="text-link company-grid-name"
                  style={{ paddingLeft: "0px" }}
                >
                  {deal.dealName}
                </div>
              </div>
            </div>
            <div className="grid-title-items">{deal.stage}</div>
            <div className="grid-title-items">
              {formatter.format(deal.amount)}
            </div>
          </div>
        );
      });
    } else {
      return (<div>loading...</div>)
    }
  }

  render() {
    const { isActive, detailExit, showEdit } = this.props;
    if (this.props.company.length === 0 ) {
      return(<div>loading... </div>)
    }
      const { companyName, logoUrl, city, state, companyId} = this.props.company[0][0];
      return (
        <React.Fragment>
          <div className={isActive ? "mask show" : "mask"} />
          <div className={isActive ? "form-container show" : "form-container"}>
            <div className={isActive ? "form-card show" : "form-card"}>
              <div className="company-details-header-container">
                <div className="form-header">
                  <div className="form-name">{companyName}</div>
                  <div
                    className="fas fa-pencil-alt"
                    onClick={() => this.editMode(this.props.company[0], detailExit, showEdit)}
                  />
                  <div className="fas fa-times fa-lg" onClick={detailExit} />
                </div>
              </div>
              <div className="form-field-container">
                <img
                  src={logoUrl}
                  alt="company logo"
                  style={{
                    height: "150px",
                    maxWidth: "300px",
                    borderRadius: "10px",
                    margin: "auto",
                    boxShadow: "0px 0px 5px 0px black"
                  }}
                />
                <div className="company-detailed-divider" />
                <p style={{ textAlign: "center", fontSize: "1rem" }}>
                  {city}, {state}{" "}
                </p>

                <div>
                  <div
                    className="company-grid-container"
                    style={{
                      height: "auto",
                      maxHeight: "200px",
                      overflow: "scroll"
                    }}
                  >
                    <div className="company-grid-row company-grid-header">
                      <div className="grid-title-items">deal</div>
                      <div className="grid-title-items">stage</div>
                      <div className="grid-title-items">amount</div>
                    </div>
                    {this.renderDeals()}
                  </div>
                </div>
              </div>
              <div className="form-footer-container">
                <input
                  className="delete-button"
                  type="submit"
                  value="delete company"
                  onClick={() => this.onDelete(companyId)}
                />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }



const mapDispatchToProps = dispatch => {
  return {
    deleteCompanyById: company =>
      dispatch(actionTypes.deleteCompanyById(company))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CompanyDetails);
