import * as React from 'react';
import styled from 'styled-components';
import CellGroup from './CellGroup';
import Player from './Interfaces';

interface TicTacProps {
    className?: string;
    player1: Player;
    player2: Player;
}

interface TicTacState {
    activePlayer: Player;
}

class TicTac extends React.Component< TicTacProps , TicTacState > {
    constructor(props: TicTacProps) {
        super(props);
        this.state = {
            activePlayer: this.props.player1
        };
        this.switchPlayer = this.switchPlayer.bind(this);
    }

    switchPlayer() {
        const { player1, player2 } = this.props;
        if (player1.isActive) {
            this.setActivePlayer(player2);
        }else {
            this.setActivePlayer(player1);
        }
    }

    setActivePlayer(player: Player) {
        const { player1, player2 } = this.props;
        player2.isActive = !player2.isActive;
        player1.isActive = !player1.isActive;
        this.setState({
            activePlayer: player
        });
    }
    
    setCellContent() {
        return 0;
    }
    
    render() {
        const { className } = this.props;
        const { activePlayer } = this.state;
        return(
            <div className={className}>
                <h1>Tic Tac Toe</h1>
                <CellGroup activePlayer={activePlayer} onTurnEnd={this.switchPlayer}/>
                <CellGroup activePlayer={activePlayer} onTurnEnd={this.switchPlayer}/>
                <CellGroup activePlayer={activePlayer} onTurnEnd={this.switchPlayer}/>
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