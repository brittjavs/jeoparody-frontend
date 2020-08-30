import React, { Component } from 'react';
import Clue from './Clue';

class Clues extends Component {
  render() {
    return (
      <div>
        {/* STILL NEEDS REFACTORING */}
        {/* Will need to ierate to show only one clue  */}
        {this.props.clues.map((clueObj) => {
          return <Clue clue={clueObj} key={clueObj.id} />;
        })}
      </div>
    );
  }
}

export default Clues;
