import * as React from 'react';
import styled from 'styled-components';
import Player from './Interfaces';

interface CellProps {
    className?: string;
    activePlayer: Player;
    onTurnEnd: Function;
}

interface CellState {
    value: string;
}

class Cell extends React.Component< CellProps , CellState > {
    constructor(props: CellProps) {
        super(props);
        this.state = { value: '' };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event: any) {
        const { activePlayer, onTurnEnd } = this.props;
        if (this.state.value === '') {
            this.setState({
                value: activePlayer.symbol
            });
            onTurnEnd();
        }
    }
    
    render() {
        const { className } = this.props; 
        return (
            <button className={className} onClick={this.handleClick} >
                {this.state.value}
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