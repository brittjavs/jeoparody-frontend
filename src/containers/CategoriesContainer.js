import React from 'react';
import { connect } from 'react-redux';
import Categories from '../components/Categories';
import { fetchCategories } from '../actions/categories.js';
import CluesContainer from './CluesContainer';

class CategoriesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
    // move the time interval here - not yet!
  }

  render() {
    return (
      <div className='categories-container'>
        <h2>Categories</h2>
        <Categories categories={this.props.categories} />
        {/* Not sure if we still need this here since the startSlides is rendering the Clues Component */}
        <CluesContainer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};
export default connect(mapStateToProps, { fetchCategories })(
  CategoriesContainer,
);
