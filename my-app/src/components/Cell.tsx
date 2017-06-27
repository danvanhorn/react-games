import * as React from 'react';
import styled from 'styled-components';

export interface CellProps {
    className?: string;
    value?: string;
}

class Cell extends React.Component< CellProps , {} > {
    handleClick() {
        alert('click');
    }
    
    render() {
        const { value , className } = this.props; 
        return(
            <button className={className} onClick={this.handleClick} >
                {value}
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