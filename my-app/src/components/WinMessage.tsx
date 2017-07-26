import * as React from 'react';
import styled from 'styled-components';

interface WinMessageProps {
  className?: string;
  winner: string;
  onClick: () => any;
}

class WinMessage extends React.Component<WinMessageProps, {}> {
  render() {
    const buttonStyle = {
      backgroundColor: 'rgb(29, 77, 155)',
      color: 'white',
      border: 'none',
      padding: '1em 2em 1em 2em'
    };
    const { winner } = this.props;
    return (
      <div className={this.props.className}>
        <p style={{ padding: '1em' }}>
          {winner} wins the Game!!!
        </p>
        <div
          style={{
            paddingTop: '2em',
            paddingBottom: '2em'
          }}
        >
          <button style={buttonStyle} onClick={this.props.onClick}>
            Reset Game
          </button>
        </div>
      </div>
    );
  }
}

const StyledWinMessage = styled(WinMessage)`
  position: fixed;
  width: 50%;
  left: 50%;
  top: 50%; 
  background: white;
  color: black;
  text-align: center;
  box-shadow: 10px 10px 5px black;
  -ms-transform: translate(-50%,-50%);
  -moz-transform:translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  transform: translate(-50%,-50%);
`;

export default StyledWinMessage;
