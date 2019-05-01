import React, { Component } from 'react'

export default class DealsForm extends Component {
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
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <React.Fragment>
        <div className="mask show" />
        <div className="form-container show">
          <div className="form-card">
            <div className="form-header">Create Deal</div>
            <div className="form-field-container">
              <input
                type="text"
                name="dealName"
                className="form-field"
                placeholder="Enter deal name"
                value={this.state.dealName}
                onChange={this.onInputChange}
              />
              <label for="stageSelect">Stage</label>
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
              <label for="amount">Amount</label>
              <input
                type="number"
                name="amount"
                className="form-field amount"
                placeholder="Enter Amount"
                value={this.state.amount}
                onChange={this.onInputChange}
              />
              <label for="closeDateSelect">Close Date</label>
              <input
                className="form-control closeDateSelect"
                type="date"
                value="2019-05-20"
                value={this.state.closeDate}
                onChange={this.onInputChange}
              />
              <label for="startDateSelect">Start Date</label>
              <input
                className="form-control startDateSelect"
                type="date"
                value="2019-05-14"
                value={this.state.startDate}
                onChange={this.onInputChange}
              />
              <label for="companySelect">Company</label>
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
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
