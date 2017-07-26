import * as React from 'react';
import styled from 'styled-components';
import Cell from './Cell';
import IPlayer from './interfaces/IPlayer';
import ICell from './interfaces/ICell';

interface TicTacProps {
  className?: string;
  activePlayer: IPlayer;
  onTurnEnd: Function;
  board: Array<ICell>;
}

class TicTacToe extends React.Component<TicTacProps, {}> {
  constructor(props: TicTacProps) {
    super(props);
  }

  render() {
    const { className, onTurnEnd, activePlayer, board } = this.props;
    return (
      <div className={className}>
        <h1>Tic Tac Toe</h1>
        <div>
          <Cell
            activePlayer={activePlayer}
            onTurnEnd={onTurnEnd}
            cell={board[0]}
          />
          <Cell
            activePlayer={activePlayer}
            onTurnEnd={onTurnEnd}
            cell={board[1]}
          />
          <Cell
            activePlayer={activePlayer}
            onTurnEnd={onTurnEnd}
            cell={board[2]}
          />
        </div>
        <div>
          <Cell
            activePlayer={activePlayer}
            onTurnEnd={onTurnEnd}
            cell={board[3]}
          />
          <Cell
            activePlayer={activePlayer}
            onTurnEnd={onTurnEnd}
            cell={board[4]}
          />
          <Cell
            activePlayer={activePlayer}
            onTurnEnd={onTurnEnd}
            cell={board[5]}
          />
        </div>
        <div>
          <Cell
            activePlayer={activePlayer}
            onTurnEnd={onTurnEnd}
            cell={board[6]}
          />
          <Cell
            activePlayer={activePlayer}
            onTurnEnd={onTurnEnd}
            cell={board[7]}
          />
          <Cell
            activePlayer={activePlayer}
            onTurnEnd={onTurnEnd}
            cell={board[8]}
          />
        </div>
      </div>
    );
  }
}

const styledTicTacToe = styled(TicTacToe)`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
`;

export default styledTicTacToe;
