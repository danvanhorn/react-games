import * as React from 'react';
import styled from 'styled-components';
import ScoreCard from './ScoreCard';

interface ScoreBoardProps {
    className?: string;
    game: string;
}

class ScoreBoard extends React.Component< ScoreBoardProps, {} > {
    render() {
        const { game, className } = this.props;
        return (
            <div className={className}>
                <h4 style={{width: '100%', textAlign: 'center'}}> Score Board for {game}</h4>
                <ScoreCard id="1" playerName="Dan"/>
                <ScoreCard id="2" playerName="Jeff"/>
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