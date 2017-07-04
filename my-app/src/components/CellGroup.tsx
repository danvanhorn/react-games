import * as React from 'react';
import Cell from './Cell';
import Player from './Interfaces';

interface CellGroupProps {
    className?: string;
    activePlayer: Player;
    onTurnEnd: Function;
}

class CellGroup extends React.Component< CellGroupProps, {} > {
    constructor(props: CellGroupProps) {
        super(props);
    }
    
    render() {
        const { className, activePlayer, onTurnEnd } = this.props;
        return (
            <div className={className}>
                <Cell activePlayer={activePlayer} onTurnEnd={onTurnEnd}/>
                <Cell activePlayer={activePlayer} onTurnEnd={onTurnEnd}/>
                <Cell activePlayer={activePlayer} onTurnEnd={onTurnEnd}/>
            </div>
        );
    }
}

export default CellGroup;