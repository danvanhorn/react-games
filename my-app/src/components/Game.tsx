import * as React from 'react';
import styled from 'styled-components';

interface GameProps {
    className?: string;
    numPlayers: number;
}

interface GameState {
    player1: string;
    player2: string;
    board: string[];
}

class GameContainer extends React.Component< GameProps , GameState > {
    constructor() {
        super();
        this.state = {
            player1: 'Player 1',
            player2: 'Player 2',
            board: Array(9).fill(''),
        };
    }
    
    render() {
        return(
        <div className={this.props.className}>
            {this.props.children}
        </div>);
    }
}

const styledGame = styled(GameContainer)`
    padding: 50px;
    height: 500px;
    width: 500px;
`;

export default styledGame;