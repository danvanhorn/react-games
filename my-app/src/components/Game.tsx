import * as React from 'react';
import styled from 'styled-components';

export interface GameProps {
    className?: string;
    numPlayers: number;
}

class GameContainer extends React.Component< GameProps , {} > {
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