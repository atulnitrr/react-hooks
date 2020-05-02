import React, { Component } from "react";

export default class CounterComponent extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null,
  };

  componentDidMount() {
    document.title = `You have clicked ${this.state.count} times`;
    window.addEventListener("mouseover", this.handleMouseOver);
  }
  componentDidUpdate() {
    document.title = `You have clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    window.removeEventListener("mouseover", this.handleMouseOver);
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  toggle = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
  };

  handleMouseOver = (event) => {
    this.setState({
      x: event.pageX,
      y: event.pageY,
    });
  };
  render() {
    return (
      <div>
        <h2>Counter </h2>
        <button onClick={this.increment}>
          i was clicked {this.state.count} times
        </button>

        <h2>Toggle light</h2>
        <div
          style={{
            height: "100px",
            width: "100px",
            background: this.state.isOn ? "grey" : "yellow",
          }}
          onClick={this.toggle}
        ></div>

        <h2>Mouse position </h2>
        <ul>
          <li>PostionX: {this.state.x}</li>
          <li>PositionY: {this.state.y}</li>
        </ul>
      </div>
    );
  }
}
