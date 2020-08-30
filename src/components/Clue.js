import React, { Component } from 'react';

export class Clue extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.clue.question}</h3>
      </div>
    );
  }
}

export default Clue;
