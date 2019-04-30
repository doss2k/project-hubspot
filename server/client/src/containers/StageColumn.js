import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import DealCard from './DealCard'

export class StageColumn extends Component {
  addTotal = () => {
    console.log('i got called')
    const amount = this.props.stage.dealIds.map(dealId => {
      const result = this.props.deals.reduce((total, deal) => {
        return 3 + 1
      }, 0)
      return result
    })
    return amount
  }

  render() {
    return (
      <Container>
        <Title>
          {this.props.stage.title}
          <span style={{ float: 'right' }}>
            {this.props.stage.dealIds.length}
          </span>
        </Title>
        <Droppable droppableId={this.props.stage.id}>
          {(provided, snapshot) => (
            <DealList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.deals.map((deal, index) => (
                <DealCard key={deal.id} deal={deal} index={index} />
              ))}
              {provided.placeholder}
            </DealList>
          )}
        </Droppable>
        <div
          style={{
            backgroundColor: 'white',
            textAlign: 'center'
          }}
        >
          Total: $ {this.addTotal()}
        </div>
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
  min-height: 100%;
`
const Title = styled.h3`
  padding: 8px;
`
const DealList = styled.div`
  padding: 8px;
  background-color: ${props => (props.isDraggingOver ? '#e2eaf2' : '#f4f8fa')};
  transition: background-color 0.2s ease;
  flex-grow: 1;
  min-height: 100px;
`

export default StageColumn
