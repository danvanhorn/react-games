import * as React from 'react';
import styled from 'styled-components';
import ScoreCard from './ScoreCard';
import IPlayer from './interfaces/IPlayer';

interface ScoreBoardProps {
    className?: string;
    player1: IPlayer;
    player2: IPlayer;
    game: string;
}

interface ScoreBoardState {
    player1: IPlayer;
    player2: IPlayer;
}

class ScoreBoard extends React.Component< ScoreBoardProps, ScoreBoardState > {
    constructor(props: ScoreBoardProps) {
        super(props);
        this.state = {
            player1: this.props.player1,
            player2: this.props.player2
        };
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