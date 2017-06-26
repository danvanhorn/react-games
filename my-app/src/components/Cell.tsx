import * as React from 'react';
import styled from 'styled-components';

export interface CellProps {
    className?: string;
}

class Cell extends React.Component< CellProps , {} > {
    render() {
        return(
        <button className={this.props.className} onClick={() => alert('youve clicked')}>
            X
        </button>);
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
`;

export default styledCell;