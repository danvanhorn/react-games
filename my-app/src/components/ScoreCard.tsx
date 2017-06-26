import * as React from 'react';
import styled from 'styled-components';

export interface ScoreCardProps {
    className?: string;
    playerName?: string;
    id: string;
}

class ScoreCard extends React.Component< ScoreCardProps, {} > {
    constructor() {
        super();
    }

    render() {
        const { className, playerName, id } = this.props;
        let content = null;
        if (!playerName) { 
            content = (
                <div id={id} className={className}>
                    Player {id}
                </div>
            );
        }else {
            content = (
                <div id={id} className={className}>
                    {playerName}
                </div>
            );
        }
        return content;
    }
}

const styledScoreCard = styled(ScoreCard)`
    display: flex-box;
    flex-flow: column nowrap;
    width: 50%;
`;

export default styledScoreCard;