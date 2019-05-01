import React, { Component } from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DealCard from "./DealCard";

export class StageColumn extends Component {
  render() {
    return (
      <div className="deal-list-container">
        <div className="deal-header-container">
          <div className="deal-list-title">
            {this.props.stage.title}
            <span style={{ float: "right" }}>
              {this.props.stage.dealIds.length}
            </span>
          </div>
          <ul className={this.props.stage.title + "-deal-progress-list"}>
            <li className="deal-progress-line" />
            <li className="deal-progress-line" />
            <li className="deal-progress-line" />
            <li className="deal-progress-line" />
            <li className="deal-progress-line" />
          </ul>
        </div>
        <Droppable droppableId={this.props.stage.id}>
          {(provided, snapshot) => (
            <DealList
              className="deal-list"
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
        <div className="deal-list-footer">Total: $ {this.props.amount}</div>
      </div>
    );
  }
}

const DealList = styled.div`
  background-color: ${props => (props.isDraggingOver ? "#e2eaf2" : "#f4f8fa")};
`;

export default StageColumn;
