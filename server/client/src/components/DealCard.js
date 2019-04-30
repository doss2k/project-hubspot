import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  background-color: ${props => (props.isDragging ? '#eee' : 'white')};
  transition: background-color 0.2s ease;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
`

export class DealCard extends Component {
  render() {
    return (
      //a draggable has two required props, draggableId (which we'll assign to the deal id) and an index//
      //draggable also expects its child to be a function
      <Draggable draggableId={this.props.deal.dealId} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            //innerRef has been depreciated
            // innerRef={provided.innerRef}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          // aria-roledescription="Press space bar to lift the deal"
          >
            {this.props.deal.dealName}
          </Container>
        )}
      </Draggable>
    )
  }
}

export default DealCard
