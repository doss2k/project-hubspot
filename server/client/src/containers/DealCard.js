import React, { Component } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
            <div className="deal-card-container">
              <div className="deal-card-title-link">
                <Link className="bold text-link" to="/dashboard">
                  {this.props.deal.dealName}
                </Link>
              </div>
              <p>
                <span className="bold">Total sale: </span>$
                {this.props.deal.amount}
              </p>
              <p>
                <span className="bold">Close date: </span>
                {this.props.deal.closeDate}
              </p>
            </div>
          </Container>
        )}
      </Draggable>
    );
  }
}

const Container = styled.div`
  background-color: ${props => (props.isDragging ? "white" : "white")};
  box-shadow: ${props => (props.isDragging ? "5px 5px 10px -5px #b5bcc5" : "")};
`;

export default DealCard;
