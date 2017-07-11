import * as React from 'react';
import styled from 'styled-components';
import IPlayer from './interfaces/IPlayer';

const highlightedStyle = {
    background: 'white',
    color: 'black'
};

interface ScoreCardProps {
    className?: string;
    player: IPlayer;
}

interface ScoreCardState {
    player: IPlayer;
}

class ScoreCard extends React.Component< ScoreCardProps, ScoreCardState > {
    constructor(props: ScoreCardProps) {
        super(props);
        this.state = {
            player: this.props.player
        };
    }

    render() {
        const { className } = this.props;
        const { player } = this.state;
        let content = null;
        if (player.isActive) {
            content = (<h4 style={highlightedStyle}>{player.name}</h4>);
        }else {
            content = (<h4>{player.name}</h4>);
        }
        return (
            <div className={className}>
                {content}
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