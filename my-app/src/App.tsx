import * as React from 'react';
import GameSelect from './components/GameSelect';

// import './App.css';
// import styled from "styled-components";
import { injectGlobal } from 'styled-components';

injectGlobal`
  * { 
    margin: 0; 
    padding: 0; 
  }

  html { 
    font-family: 'Roboto', sans-serif;
    background: rgb(29, 77, 155);
    color: white;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
`;

// could add a selector for new games
interface AppProps {
  compiler: string;
  framework: string;
}

class App extends React.Component<AppProps, {}> {
  render() {
    return <GameSelect />;
  }
}

export default App;
