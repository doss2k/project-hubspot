import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../actions'
import SubmitButtom from './SubmitButton'

export class DealsForm extends Component {
  state = {
    dealName: '',
    stage: '',
    amount: '',
    createdDate: '',
    closeDate: '',
    companyId: '',
    stageOrder: ''
  }

  //as data is typed, caputer in the state
  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  //on submit, send POST request to the server
  onFormSubmit = e => {
    const { dealName, stage, amount, companyId } = this.state
    let { createdDate, closeDate } = this.state
    // In order to send the server unix timestamps
    createdDate = new Date(createdDate).getTime() / 1000
    closeDate = new Date(closeDate).getTime() / 1000

    // Send the stage order so the server can update the db w/ the proper location
    const stageOrder = this.props.stages[this.state.stage].dealId.length + 1

    const newDealData = {
      dealName,
      stage,
      amount,
      createdDate,
      closeDate,
      companyId,
      stageOrder
    }

    this.props.createDeal(newDealData)
    //reset form
    this.setState({
      dealName: '',
      stage: '',
      amount: '',
      createdDate: '',
      closeDate: '',
      companyId: ''
    })

    e.preventDefault()
  }

  render() {
    const { isActive, formClick } = this.props

    if (this.props.companies) {
      return (
        <React.Fragment>
          <div className={isActive ? 'mask show' : 'mask'} />
          <div className={isActive ? 'form-container show' : 'form-container'}>
            <div className={isActive ? 'form-card show' : 'form-card'}>
              <div className="form-header-container">
                <div className="form-header">
                  <div className="form-name">Create Deal</div>
                  <div className="fas fa-times" onClick={formClick} />
                </div>
              </div>
              <form
                className="form-field-container"
                onSubmit={this.onFormSubmit}
              >
                <p className="dealName">Deal Name</p>
                <input
                  type="text"
                  name="dealName"
                  className="form-field"
                  placeholder="Enter deal name"
                  value={this.state.dealName}
                  onChange={this.onInputChange}
                />
                <p className="stageSelect">Stage</p>
                <select
                  className="form-control stageSelect"
                  value={this.state.stage}
                  onChange={this.onInputChange}
                  name="stage"
                >
                  <option value="default">Select stage</option>
                  <option value="Initiated">Initiated</option>
                  <option value="Qualified">Qualified</option>
                  <option value="Contract Sent">Contract Sent</option>
                  <option value="Closed Won">Closed Won</option>
                  <option value="Closed Lost">Closed Lost</option>
                </select>
                <p className="amount">Amount</p>
                <input
                  type="number"
                  name="amount"
                  className="form-field amount"
                  placeholder="Enter Amount"
                  value={this.state.amount}
                  onChange={this.onInputChange}
                />
                <p className="closeDateSelect">Select Close Date</p>
                <input
                  className="form-control closeDateSelect"
                  type="date"
                  name="closeDate"
                  value={this.state.closeDate}
                  onChange={this.onInputChange}
                />
                <p className="createDateSelect">Select Create Date</p>
                <input
                  className="form-control createDateSelect"
                  type="date"
                  value={this.state.createdDate}
                  onChange={this.onInputChange}
                  name="createdDate"
                />
                <p className="companySelect">Select Company</p>
                <select
                  className="form-control companySelect"
                  value={this.state.companyId}
                  onChange={this.onInputChange}
                  name="companyId"
                >
                  <option value="default">Select company</option>
                  {this.props.companies.map(company => (
                    <option
                      key={company.companyId}
                      value={company.companyId}
                      name={company.companyId}
                    >
                      {company.companyName}
                    </option>
                  ))}
                </select>
                <div className="form-footer-container">
                  <SubmitButtom formClick={formClick} />
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    stages: state.dealsReducer.stages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createDeal: dealData => dispatch(actionTypes.createDeal(dealData)),
    getAllDeals: () => dispatch(actionTypes.getAllDeals())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealsForm)
