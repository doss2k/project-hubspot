import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../actions'
import SubmitButtom from './SubmitButton'

export class DealsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dealName: '',
      stage: '',
      amount: '',
      createdDate: '',
      closeDate: '',
      company: '',
      companyId: ''
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  //as data is typed, caputer in the state
  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  //on submit, send POST request to the server
  onFormSubmit(e) {
    console.log(this.state)
    e.preventDefault()
    this.props.createCompany(this.state)
    //reset form
    this.setState({
      dealName: '',
      stage: '',
      amount: '',
      createdDate: '',
      closeDate: '',
      company: '',
      companyId: ''
    })
  }

  render() {
    const { isActive, formClick } = this.props
    return (
      <React.Fragment>
        <div className={isActive ? 'mask show' : 'mask'} />
        <div className={isActive ? 'form-container show' : 'form-container'}>
          <div className={isActive ? 'form-card show' : 'form-card'}>
            <div className="form-header-container" />
            <div className="form-header" />
            <div className="form-name">Create Deal</div>
            <div className="fas fa-times" onClick={formClick} />
          </div>
        </div>
        <form className="form-field-container" onSubmit={this.onFormSubmit}>
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
          >
            <option>Initiated</option>
            <option>Qualified</option>
            <option>Contract Sent</option>
            <option>Closed Won</option>
            <option>Closed Lost</option>
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
            value="2019-05-20"
            value={this.state.closeDate}
            onChange={this.onInputChange}
          />
          <p className="createDateSelect">Select Create Date</p>
          <input
            className="form-control createDateSelect"
            type="date"
            value="2019-05-14"
            value={this.state.createdDate}
            onChange={this.onInputChange}
          />
          <p className="companySelect">Select Company</p>
          <select
            className="form-control companySelect"
            value={this.state.company}
            //search through the companies passed as props from deals to compare company name to company id?
            onChange={this.onInputChange}
          >
            <option>This</option>
            <option>Feature</option>
            <option>Doesn't</option>
            <option>Work</option>
            <option>Yet</option>
          </select>
          <div className="form-footer-container">
            <SubmitButtom formClick={formClick} />
          </div>
        </form>
        <div />
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createDeal: dealData => dispatch(actionTypes.createDeal(dealData))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(DealsForm)
