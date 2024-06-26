import React, { Component } from "react";

class RandomApp extends Component {
  state = { value: 0 };

  randomNumber = () => Math.floor(Math.random() * this.props.max);

  handleClick = () => {
    this.setState({ value: this.randomNumber() });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.value}</h1>
        <button onClick={this.handleClick}>Get Random Number</button>
      </div>
    );
  }
}

export default RandomApp;
