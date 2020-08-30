import React from 'react';
import { connect } from 'react-redux';
import { fetchClues } from '../actions/clues';
import Clues from '../components/Clues';

class CluesContainer extends React.Component {
  // componentDidMount
  // to fetch clues
  // before dispatching to store limit what's store in redux

  componentDidMount() {
    // fetch first category
    console.log('CLUESCONTAINER', this.props.category_id[0]);
    this.props.fetchClues(this.props.category_id[0]);
  }

  render() {
    return (
      <>
        <h1>Clues for {this.props.title[0]}</h1>
        <Clues clues={this.props.clues} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    clues: state.clues,
    title: state.categories.map((category) => {
      return category.title;
    }),
    category_id: state.categories.map((category) => {
      return category.id;
    }),
  };
};

export default connect(mapStateToProps, { fetchClues })(CluesContainer);
