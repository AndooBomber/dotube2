import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };
  }

  onClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.onClick.bind(this)}>Count Up!</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);