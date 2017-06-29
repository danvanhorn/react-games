import * as React from 'react';
import styled from 'styled-components';

const EditButtonStyle = {
    color: 'lightgray',
    marginLeft: '1em'
};

interface ScoreCardProps {
    className?: string;
    playerName?: string;
    id: string;
}

interface ScoreCardState {
    playerName?: string;
}

class ScoreCard extends React.Component< ScoreCardProps, ScoreCardState > {
    constructor(props: any) {
        super(props);
        if (this.props.playerName !== '') {
            this.state = { 
                playerName: props.playerName
            };
        }else {
            this.state = {
                playerName: 'Player' + props.id
            };
        }
        this.inputToHeading = this.inputToHeading.bind(this);
        this.headingToInput = this.headingToInput.bind(this);
        this.saveName = this.saveName.bind(this);
    }

    saveName() {
        // TODO: set the player name in state here?
        return 0;
    }

    headingToInput() {
        return (
            <input id={this.props.id} value="Enter name...">
                <button style={EditButtonStyle} onClick={this.saveName}>Save</button>
            </input>
        );
    }

    inputToHeading() {
        // TODO: convert the heading to an input so the player can enter a name
        return 0;
    }

    render() {
        const { className, playerName, id } = this.props;
        return (
            <div id={id} className={className}>
                <h4>
                    {playerName}
                    <button style={EditButtonStyle} onClick={this.inputToHeading} value="Edit"/>
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