import * as React from 'react';
import styled from 'styled-components';
import Player from './Interfaces';

interface ScoreCardProps {
    className?: string;
    player: Player;
}

interface ScoreCardState {}

class ScoreCard extends React.Component< ScoreCardProps, ScoreCardState > {
    constructor(props: ScoreCardProps) {
        super(props);
    }

    render() {
        const { className, player } = this.props;
        return (
            <div className={className}>
                <h4>
                    {player.name}
                </h4>
            </div>
        );
    }
}

const styledScoreCard = styled(ScoreCard)`
    display: flex-box;
    flex-flow: column nowrap;
    text-align: center;
    width: 50%;
`;

export default styledScoreCard;