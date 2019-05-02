import React, { Component } from 'react'
import { connect } from 'react-redux'
// import dnddata from '../static/sampleData/dnddata'
import StageColumn from './StageColumn'
import { DragDropContext } from 'react-beautiful-dnd'
import Button from './Button'
import DealsForm from './DealsForm'

import * as actionTypes from '../actions/';

export class Deals extends Component {
  state = {
    stageOrder: ['Initiated', 'Qualified', 'Contract Sent', 'Closed Won', 'Closed Lost']
  }

  componentDidMount() {
    this.props.getAllDeals();
    this.props.getDealPosition();
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
      const newDealIds = [...startingStage.dealIds]

      newDealIds.splice(source.index, 1)
      newDealIds.splice(destination.index, 0, draggableId)

      const newStage = {
        ...startingStage,
        dealIds: newDealIds
      }

      const newState = {
        ...this.props,
        stages: {
          ...this.props.stages,
          [newStage.id]: newStage
        }
      }

      // this.setState(newState)
      this.setDealPosition(newState);
      return;
    }

    const startDealIds = [...startingStage.dealIds]
    startDealIds.splice(source.index, 1)
    const newStartingStage = {
      ...startingStage,
      dealIds: startDealIds
    }

    const finishDealIds = [...endingStage.dealIds]
    finishDealIds.splice(destination.index, 0, draggableId)
    const newEndingStage = {
      ...endingStage,
      dealIds: finishDealIds
    }

    const newState = {
      ...this.props,
      stages: {
        ...this.props.stages,
        [newStartingStage.id]: newStartingStage,
        [newEndingStage.id]: newEndingStage
      }
    }

    // this.setState(newState)
    this.setDealPosition(newState);
  }

  render() {
    return (
      <React.Fragment>
        <div className="header-div">
          <h2>Deals</h2>
          <Button title={'Create Deal'} route="/deals" />
        </div>
        {/* comment this out if you don't want to see it */}
        <DealsForm />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div className="deal-grid-container">
            {this.state.stageOrder.map(stageId => {
              const stage = this.props.stages[stageId]
              const deals = stage.dealIds.map(
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
  }
}

const mapStateToProps = state => {
  return {
    deals: state.dealsReducer.deals,
    stages: state.dealsReducer.stages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllDeals: () => dispatch(actionTypes.getAllDeals()),
    getDealPosition: () => dispatch(actionTypes.getDealPosition()),
    setDealPosition: newState => dispatch(actionTypes.setDealPosition(newState))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deals);
