import * as React from 'react';
import TicTacToeContainer from './TicTacToeContainer';

//TODO

class GameSelect extends React.Component<{}, {}> {
  state = {
    go: false
  };

  handleClick = () => {
    this.setState(() => {
      return { go: true };
    });
  };

  render() {
    return (
      <div>
        {!this.state.go
          ? <button onClick={this.handleClick}>Click to Play</button>
          : null}
        {this.state.go ? <TicTacToeContainer numPlayers={2} /> : null}
      </div>
    );
  }
}

export default GameSelect;
