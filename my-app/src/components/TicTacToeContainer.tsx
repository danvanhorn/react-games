import * as React from 'react';
import styled from 'styled-components';
import TicTac from './TicTacToe';
import ScoreBoard from './ScoreBoard';
import WinMessage from './WinMessage';
import IPlayer from './interfaces/IPlayer';
import ICell from './interfaces/ICell';
import '../App.css';

let p1 = {
  name: 'Player1',
  symbol: 'X',
  isActive: true
};

let p2 = {
  name: 'Player2',
  symbol: 'O',
  isActive: false
};

interface GameProps {
  className?: string;
  numPlayers: number;
}

interface GameState {
  player1: IPlayer;
  player2: IPlayer;
  winner: string;
  activePlayer: IPlayer;
  gameBoard: ICell[];
  isGameOver: Boolean;
}

const getNewBoard = () => {
  let board = new Array(9);
  for (let i = 0; i < 9; i++) {
    let cell: ICell = {
      key: i,
      value: ''
    };
    board[i] = cell;
  }
  return board;
};

class TicTacToeContainer extends React.Component<GameProps, GameState> {
  state = {
    player1: p1,
    player2: p2,
    activePlayer: p1,
    winner: '',
    gameBoard: getNewBoard(),
    isGameOver: false
  };

  switchPlayer = () => {
    const { player1, player2 } = this.state;
    if (player1.isActive) {
      this.setActivePlayer(player2);
    } else {
      this.setActivePlayer(player1);
    }
  };

  // Extremely verbose logic to check if the game is over
  checkWin = () => {
    const { gameBoard, activePlayer } = this.state;
    const symbol = activePlayer.symbol;
    let gameOver = false;
    if (
      gameBoard[0].value === symbol &&
      gameBoard[1].value === symbol &&
      gameBoard[2].value === symbol
    ) {
      gameOver = true;
    } else if (
      gameBoard[3].value === symbol &&
      gameBoard[4].value === symbol &&
      gameBoard[5].value === symbol
    ) {
      gameOver = true;
    } else if (
      gameBoard[6].value === symbol &&
      gameBoard[7].value === symbol &&
      gameBoard[8].value === symbol
    ) {
      gameOver = true;
    } else if (
      gameBoard[0].value === symbol &&
      gameBoard[3].value === symbol &&
      gameBoard[6].value === symbol
    ) {
      gameOver = true;
    } else if (
      gameBoard[1].value === symbol &&
      gameBoard[4].value === symbol &&
      gameBoard[7].value === symbol
    ) {
      gameOver = true;
    } else if (
      gameBoard[2].value === symbol &&
      gameBoard[6].value === symbol &&
      gameBoard[8].value === symbol
    ) {
      gameOver = true;
    } else if (
      gameBoard[0].value === symbol &&
      gameBoard[4].value === symbol &&
      gameBoard[8].value === symbol
    ) {
      gameOver = true;
    } else if (
      gameBoard[2].value === symbol &&
      gameBoard[4].value === symbol &&
      gameBoard[6].value === symbol
    ) {
      gameOver = true;
    }
    this.setState(() => {
      return {
        isGameOver: gameOver,
        winner: activePlayer.name
      };
    });
  };

  setActivePlayer = (player: IPlayer) => {
    const { player1, player2 } = this.state;
    player2.isActive = !player2.isActive;
    player1.isActive = !player1.isActive;
    this.setState({
      activePlayer: player
    });
  };

  setCellContent = (cell: ICell, symbol: string) => {
    let newBoard = this.state.gameBoard;
    if (newBoard[cell.key].value === '') {
      newBoard[cell.key].value = symbol;
      this.setState(() => {
        return { gameBoard: newBoard };
      });
      this.checkWin();
      if (!this.state.isGameOver) {
        this.switchPlayer();
      }
    }
  };

  handleClick = () => {
    this.setState(() => {
      return {
        gameBoard: getNewBoard(),
        isGameOver: false,
        activePlayer: p1
      };
    });
  };

  render() {
    const { activePlayer, gameBoard, isGameOver } = this.state;
    return (
      <div className={this.props.className}>
        <TicTac
          activePlayer={activePlayer}
          board={gameBoard}
          onTurnEnd={this.setCellContent}
        />
        <ScoreBoard game="TicTacToe" player1={p1} player2={p2} />
        {isGameOver
          ? <WinMessage winner={this.state.winner} onClick={this.handleClick} />
          : null}
      </div>
    );
  }
}

const styledTicTacToeContainer = styled(TicTacToeContainer)`
    position: relative;
    margin: 0 auto;
    padding: 50px;
    height: 500px;
    width: 500px;
`;

export default styledTicTacToeContainer;
