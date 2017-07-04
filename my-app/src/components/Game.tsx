import * as React from 'react';
import styled from 'styled-components';
import TicTac from './TicTac';
import ScoreBoard from './ScoreBoard';
import Player from './Interfaces';

let p1 = {
    name: 'Player1',
    symbol: 'X',
    isActive: true
};

let p2 = {
    name: 'Player2',
    symbol: 'O',
    isActive: false
};

interface GameProps {
    className?: string;
    numPlayers: number;
}

interface GameState {
    player1: Player;
    player2: Player;
    board: string[];
}

class GameContainer extends React.Component< GameProps , GameState > {
    constructor(props: GameProps) {
        super(props);
        this.state = {
            player1: p1,
            player2: p2,
            board: Array(9).fill(''),
        };
    }
    
    render() {
        return(
        <div className={this.props.className}>
            <TicTac player1={p1} player2={p2}/>
            <ScoreBoard game="TicTacToe" player1={p1} player2={p2}/>
        </div>);
    }
}

const styledGame = styled(GameContainer)`
    padding: 50px;
    height: 500px;
    width: 500px;
`;

export default styledGame;