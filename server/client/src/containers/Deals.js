import React, { Component } from 'react'
import { connect } from 'react-redux'
// import dnddata from '../static/sampleData/dnddata'
import StageColumn from './StageColumn'
import { DragDropContext } from 'react-beautiful-dnd'
import Button from './Button'
import DealsForm from './DealsForm'
import { bindActionCreators } from 'redux'

import {
  getAllDeals,
  getDealPosition,
  setDealPosition,
  getAllCompanies
} from '../actions/'

export class Deals extends Component {
  state = {
    stageOrder: [
      'Initiated',
      'Qualified',
      'Contract Sent',
      'Closed Won',
      'Closed Lost'
    ],
    showForm: false
  }

  componentDidMount() {
    this.props.getAllDeals()
    this.props.getAllCompanies()
    this.props.getDealPosition()
  }

  formClick = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const startingStage = this.props.stages[source.droppableId]
    const endingStage = this.props.stages[destination.droppableId]

    if (startingStage === endingStage) {
      const newDealIds = [...startingStage.dealId]

      newDealIds.splice(source.index, 1)
      newDealIds.splice(destination.index, 0, draggableId)

      const newStage = {
        ...startingStage,
        dealId: newDealIds
      }

      const newState = {
        ...this.props,
        stages: {
          ...this.props.stages,
          [newStage.id]: newStage
        }
      }

      this.props.setDealPosition(newState)
      return
    }

    const startDealIds = [...startingStage.dealId]
    startDealIds.splice(source.index, 1)
    const newStartingStage = {
      ...startingStage,
      dealId: startDealIds
    }

    const finishDealIds = [...endingStage.dealId]
    finishDealIds.splice(destination.index, 0, draggableId)
    const newEndingStage = {
      ...endingStage,
      dealId: finishDealIds
    }

    console.log('newStartingStage,', newStartingStage)
    console.log('newEndingStage,', newEndingStage)

    const newState = {
      ...this.props,
      stages: {
        ...this.props.stages,
        [newStartingStage.id]: newStartingStage,
        [newEndingStage.id]: newEndingStage
      }
    }

    this.props.setDealPosition(newState, newStartingStage, newEndingStage)
  }

  render() {
    if (this.props.stages && this.props.deals) {
      return (
        <React.Fragment>
          <div className="background-layer" />
          <div className="background-highlight-layer" />
          <div className="header-div">
            <h2>Deals</h2>
            <Button title={'Create Deal'} formClick={this.formClick} />
          </div>
          {/* comment this out if you don't want to see it */}
          <DealsForm
            isActive={this.state.showForm}
            formClick={this.formClick}
            companies={this.props.companies}
          />
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="deal-grid-container">
              {this.state.stageOrder.map(stageId => {
                const stage = this.props.stages[stageId]
                const deals = stage.dealId.map(
                  dealId => this.props.deals[dealId]
                )
                const amount = deals.reduce((total, deal) => {
                  return (total += deal.amount)
                }, 0)
                return (
                  <StageColumn
                    key={stage.id}
                    stage={stage}
                    deals={deals}
                    amount={amount}
                  />
                )
              })}
            </div>
          </DragDropContext>
        </React.Fragment>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = state => {
  return {
    deals: state.dealsReducer.deals,
    stages: state.dealsReducer.stages,
    companies: state.companiesReducer.companies
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getAllDeals, getAllCompanies, getDealPosition, setDealPosition },
    dispatch
  )
  // return {
  //   getAllDeals: () => dispatch(actionTypes.getAllDeals()),
  //   getDealPosition: () => dispatch(actionTypes.getDealPosition()),
  //   setDealPosition: newState => dispatch(actionTypes.setDealPosition(newState))
  // }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deals)
