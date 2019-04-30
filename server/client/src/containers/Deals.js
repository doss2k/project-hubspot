import React, { Component } from 'react'
import { connect } from 'react-redux'
import dnddata from '../static/sampleData/dnddata'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import StageColumn from './StageColumn'

import * as actionTypes from '../actions'

const Container = styled.div`
  display: flex;
`

class Deals extends Component {
  state = dnddata

  // onDragStart = (start, provided) => {
  //   provided.announce(
  //     `You have lifted the deal in position ${start.source.index + 1}`
  //   )
  // }

  // onDragUpdate = (update, provided) => {
  //   const message = update.destination
  //     ? `You have moved the deal to stage ${update.destination.index + 1}`
  //     : `You are currently not over a droppable area`
  //   provided.announce(message)
  // }

  onDragEnd = (result) => {
    // const message = result.destination
    //   ? `You have moved the deal from stage ${result.source.index +
    //   1} to ${result.destination.index + 1}`
    //   : `The task has been returned to its starting position of ${result.source
    //     .index + 1}`

    // provided.announce(message)

    //TODO: reorder our column
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    //nice check
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    //reorder task ids array for the stage
    const startStage = this.state.stages[source.droppableId]
    const finishStage = this.state.stages[destination.droppableId]

    if (startStage === finishStage) {
      //immutable state
      const newDealIds = [...startStage.dealIds]

      //move task id from old array index to new array index
      newDealIds.splice(source.index, 1)
      newDealIds.splice(destination.index, 0, draggableId)

      const newStage = {
        ...startStage,
        dealIds: newDealIds
      }

      const newState = {
        ...this.state,
        stages: {
          ...this.state.stages,
          [newStage.stageId]: newStage
        }
      }

      this.setState(newState)
      //make a put request to let the server know a reorder has occured
      return
    }

    // moving from one list to another
    const startDealIds = [...startStage.dealIds]
    startDealIds.splice(source.index, 1)
    const newStartStage = {
      ...startStage,
      dealIds: startDealIds
    }

    const finishDealIds = [...finishStage.dealIds]
    finishDealIds.splice(destination.index, 0, draggableId)

    const newFinishStage = {
      ...finishStage,
      dealIds: finishDealIds
    }

    const newState = {
      ...this.state,
      stages: {
        ...this.state.stages,
        [newStartStage.stageId]: newStartStage,
        [newFinishStage.stageId]: newFinishStage
      }
    }

    this.setState(newState)
  }

  // componentDidMount() {
  //   // As soon as component mounts make call to redux to fetch all deals
  //   this.props.getAllDeals();
  // }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {' '}
          {this.state.stageOrder.map(stageId => {
            const stage = this.state.stages[stageId]
            const deals = stage.dealIds.map(dealId => this.state.deals[dealId])
            return <StageColumn key={stage.stageId} stage={stage} deals={deals} />
          })}
        </Container>
      </DragDropContext>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     deals: state.dealsReducer.deals,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllDeals: () => dispatch(actionTypes.getAllDeals()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Deals);
export default Deals
