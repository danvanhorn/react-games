import * as React from 'react';
import styled from 'styled-components';
import ScoreCard from './ScoreCard';
import Player from './Interfaces';

interface ScoreBoardProps {
    className?: string;
    player1: Player;
    player2: Player;
    game: string;
}

interface ScoreBoardState {}

class ScoreBoard extends React.Component< ScoreBoardProps, ScoreBoardState > {
    constructor(props: ScoreBoardProps) {
        super();
    }
    render() {
        const { game, player1, player2, className } = this.props;
        return (
            <div className={className}>
                <h4 style={{width: '100%', textAlign: 'center'}}> Score Board for {game}</h4>
                <ScoreCard player={player1}/>
                <ScoreCard player={player2}/>
            </div>
        );
    }
}

const styledScoreBoard = styled(ScoreBoard)`
    display: flex;
    flex-flow: row wrap; 
    justify-content: space-between:
    align-content: center;
    width: 100%;
    height: 10em;
`;

export default styledScoreBoard;