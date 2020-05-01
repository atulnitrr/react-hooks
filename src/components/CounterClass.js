import React, { Component } from "react";

export default class CounterComponent extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>
          i was clicked {this.state.count} times
        </button>
      </div>
    );
  }
}
