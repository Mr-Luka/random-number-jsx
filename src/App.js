import React, {Component} from "react";

class randomApp extends Component {
  state = {value: 0};

  render () {
    return (
      <div className="App">
        <h1>Random Number</h1>
        <button onClick={this.handleClick}>Get Random Number</button>
      </div>
    )
  }
}

