import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  componentDidMount() {
    if (this.props.strikes) {
      this.setState({ strikes: this.props.strikes });
    }
    if (this.props.balls) {
      this.setState({ balls: this.props.balls });
    }
  }

  addStrike = () => {
    this.setState(prevState => {
      return { strikes: (prevState.strikes + 1) % 3 };
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
