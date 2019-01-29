import React from "react";

class Display extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };

  addStrike = () => {
    this.setState(prevState => {
      return { strikes: prevState.strikes + 1 };
    });
  };

  addBall = () => {
    this.setState(prevState => {
      return { balls: prevState.balls + 1 };
    });
  };

  render() {
    return (
      <div>
        <h1>Scoreboard component</h1>
        <h3 data-testid="strikeDisplay">strikes: {this.state.strikes}</h3>
        <h3 data-testid="ballDisplay">balls: {this.state.balls}</h3>
        <button data-testid="strikeButton" onClick={this.addStrike}>
          Strike
        </button>
        <button data-testid="ballButton" onClick={this.addBall}>
          Ball
        </button>
      </div>
    );
  }
}

export default Display;
