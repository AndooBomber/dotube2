import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonToolbar } from 'react-bootstrap'

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
        <ButtonToolbar>
          <button onClick={this.onClick.bind(this)} className="btn btn-default">Count Up!</button>
        </ButtonToolbar>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);