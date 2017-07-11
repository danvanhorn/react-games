import * as React from "react";
import styled from "styled-components";
import TicTac from "./TicTac";
import ScoreBoard from "./ScoreBoard";
import IPlayer from "./interfaces/IPlayer";
import ICell from "./interfaces/ICell";

let p1 = {
  name: "Player1",
  symbol: "X",
  isActive: true
};

let p2 = {
  name: "Player2",
  symbol: "O",
  isActive: false
};

interface GameProps {
  className?: string;
  numPlayers: number;
}

interface GameState {
  player1: IPlayer;
  player2: IPlayer;
  activePlayer: IPlayer;
  gameBoard: ICell[];
}

const getNewBoard = () => {
  let board = new Array(9);
  for (let i = 0; i < 9; i++) {
    let cell: ICell = {
      key: i,
      value: ""
    };
    board[i] = cell;
  }
  return board;
};

console.log(getNewBoard());

class GameContainer extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);
    this.state = {
      player1: p1,
      player2: p2,
      activePlayer: p1,
      gameBoard: getNewBoard()
    };
    this.setCellContent = this.setCellContent.bind(this);
    this.switchPlayer = this.switchPlayer.bind(this);
  }

  switchPlayer() {
    const { player1, player2 } = this.state;
    if (player1.isActive) {
      this.setActivePlayer(player2);
    } else {
      this.setActivePlayer(player1);
    }
  }

  setActivePlayer(player: IPlayer) {
    const { player1, player2 } = this.state;
    player2.isActive = !player2.isActive;
    player1.isActive = !player1.isActive;
    this.setState({
      activePlayer: player
    });
  }

  setCellContent(cell: ICell, symbol: string) {
    let newBoard = this.state.gameBoard;
    newBoard[cell.key].value = symbol;
    this.setState({
      gameBoard: newBoard
    });
    this.switchPlayer();
  }

  render() {
    const { activePlayer, gameBoard } = this.state;
    return (
      <div className={this.props.className}>
        <TicTac
          activePlayer={activePlayer}
          board={gameBoard}
          onTurnEnd={this.setCellContent}
        />
        <ScoreBoard game="TicTacToe" player1={p1} player2={p2} />
      </div>
    );
  }
}

const styledGame = styled(GameContainer)`
    padding: 50px;
    height: 500px;
    width: 500px;
`;

export default styledGame;
