import * as React from "react";
import styled from "styled-components";
import IPlayer from "./interfaces/IPlayer";
import ICell from "./interfaces/ICell";

interface CellProps {
  className?: string;
  activePlayer: IPlayer;
  cell: ICell;
  onTurnEnd: Function;
}

class Cell extends React.Component<CellProps, {}> {
  constructor(props: CellProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event: {}) {
    const { activePlayer, onTurnEnd, cell } = this.props;
    onTurnEnd(cell, activePlayer.symbol);
  }

  render() {
    const { className, cell } = this.props;
    return (
      <button className={className} onClick={this.handleClick}>
        {cell.value}
      </button>
    );
  }
}

const styledCell = styled(Cell)`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  height: 5em;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 5em;
  outline: none;
`;

export default styledCell;
