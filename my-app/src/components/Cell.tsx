import * as React from 'react';
import styled from 'styled-components';

interface CellProps {
    className?: string;
}

interface CellState {
    value: string;
}

class Cell extends React.Component< CellProps , CellState > {
    constructor() {
        super();
        this.state = { value: '' };
    }
    
    handleClick() {
        alert('click');
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