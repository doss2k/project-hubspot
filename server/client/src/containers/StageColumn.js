import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import DealCard from '../components/DealCard'

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
  width: 30%;
  display: flex;
  flex-direction: column;
`
const Title = styled.h3`
  padding: 8px;
`
const DealList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? 'lightblue' : 'white')};
  transition: background-color 0.2s ease;
  flex-grow: 1;
  min-height: 100px;
`

export default class StageColumn extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.stage.title}</Title>
        {/* droppable has one required prop: a droppableId, and expects children to be a function */}
        <Droppable droppableId={this.props.stage.id}>
          {(provided, snapshot) => (
            //provided object has a property called innerREf which is a function used to supply the dom node of your component to react-beaitulf dnd. A styled component has a callback property named inner ref that  returns the DOM node of the component. we can assign the function to the prop
            <DealList
              ref={provided.innerRef}
              //innerRef has been depreciated
              // innerRef={provided.innerRef}
              {...provided.droppableProps}
              isdraggingOver={snapshot.isDraggingOver}
            >
              {this.props.deals.map((deal, index) => (
                <DealCard key={deal.id} deal={deal} index={index} />
              ))}
              {provided.placeholder}
            </DealList>
          )}
        </Droppable>
      </Container>
    )
  }
}
