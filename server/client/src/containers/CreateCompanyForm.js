import React, { Component } from 'react'

export default class CreateCompanyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      logo: '',
      city: '',
      state: ''
    }
  }
  render() {
    return (
      <React.Fragment> 
      <div>
        <form>
          <input value={this.state.name} />
          <input value={this.state.logo} />
          <input value={this.state.city} />
          <input value={this.state.state} />
          <button type="submit">Create new Company</button>
        </form>
      </div>
      </React.Fragment>
    )
  }
}
