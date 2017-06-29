import * as React from 'react';
import styled from 'styled-components';
import CellGroup from './CellGroup';

export interface TicTacProps {
    className?: string;
}

class TicTac extends React.Component< TicTacProps , {} > {
    render() {
        const { className } = this.props;
        return(
            <div className={className}>
                <h1>Tic Tac Toe</h1>
                <CellGroup/>
                <CellGroup/>
                <CellGroup/>
            </div>
        );
    }
}

const styledTicTac = styled(TicTac)`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
`;

export default styledTicTac;