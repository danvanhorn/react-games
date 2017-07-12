import * as React from 'react';
import styled from 'styled-components';

interface WinMessageProps {
  className?: string;
  onClick: () => any;
}

class WinMessage extends React.Component<WinMessageProps, {}> {
  render() {
    const { className } = this.props;
    // const styles = {
    //   background: "white",
    //   color: "black",
    //   margin: "auto",
    //   textAlign: "center"
    // };
    const buttonStyle = {
      backgroundColor: 'rgb(29, 77, 155)',
      color: 'white',
      border: 'none',
      padding: '1em 2em 1em 2em'
    };
    return (
      <div className={className}>
        <p style={{ padding: '1em' }}>Some Player wins the Game!!!</p>
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
//TODO: get animation working
const StyledWinMessage = styled(WinMessage)`
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: white;
    color: black;
    margin: auto;
    text-align: center;
    box-shadow: 10px 10px 5px black;
    animation-duration: 1s;
    animation-name: WinMessage-Enter;
    animation-timing-function: ease;
`;

export default StyledWinMessage;
