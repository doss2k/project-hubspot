import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import DealCard from '../components/DealCard'

export class StageColumn extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.stage.title}</Title>
        <Droppable droppableId={this.props.stage.id}>
          {(provided, snapshot) => (
            <DealList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.deals.map((deal, index) => <DealCard key={deal.id} deal={deal} index={index} />)}
              {provided.placeholder}
            </DealList>
          )}
        </Droppable>
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
  width: 30%;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const DealList = styled.div`
  padding: 8px;
  background-color: ${props => props.isDraggingOver ? 'lightblue' : 'white'};
  transition: background-color .2s ease;
  flex-grow: 1;
  min-height: 100px;
`;

export default StageColumn;
