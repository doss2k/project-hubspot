import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

export class DealCard extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.deal.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <p>${this.props.deal.amount}</p>
            <p>{this.props.deal.dealName}</p>
            <p>Close date: {this.props.deal.closeDate}</p>
          </Container>
        )}
      </Draggable>
    )
  }
}

const Container = styled.div`
<<<<<<< HEAD:server/client/src/containers/DealCard.js
  background-color: ${props => (props.isDragging ? '#eee' : 'white')};
  transition: background-color 0.2s ease;
=======
  background-color: ${props => props.isDragging ? '#eee' : 'white'};
  transition: background-color .2s ease;
>>>>>>> 63b19c992b52831197bd0da47d290dbaf5452118:server/client/src/components/DealCard.js
  border: 1px solid #5cff7a;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
`

export default DealCard
