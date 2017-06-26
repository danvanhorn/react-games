import * as React from 'react';
// import styled from 'styled-components';
import Cell from './Cell';

export interface CellGroupProps {
    className?: string;
}

class CellGroup extends React.Component< CellGroupProps, {} > {
    render() {
        const { className } = this.props;
        return (
            <div className={className}>
                <Cell/>
                <Cell/>
                <Cell/>
            </div>
        );
    }
}

export default CellGroup;