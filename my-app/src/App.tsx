import * as React from 'react';
import GameContainer from './components/Game';
import TicTac from './components/TicTac';
// import './App.css';
// import styled from "styled-components";
import { injectGlobal } from 'styled-components';

injectGlobal`
  * { 
    margin: 0; 
    padding: 0; 
  }

  body { /* can also be whatever container */
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }

`;

// could add a selector for new games
export interface AppProps {
  compiler: string;
  framework: string;
}

class App extends React.Component< AppProps, null> {
  render() {
    return (
      <GameContainer numPlayers={2}>
        <TicTac />
      </GameContainer>
    );
  }
}

export default App;
