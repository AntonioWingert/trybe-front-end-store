import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ListResults extends Component {
  render() {
    const { searchResults } = this.props;
    const renderResults = searchResults.map(({ id, title, price, thumbnail }) => (
      <div
        data-testid="product"
        key={ id }
      >
        <h4>{ title }</h4>
        <h5>{ price }</h5>
        <img src={ thumbnail } alt={ `${title} ${id}` } />
      </div>));

    return (
      <div>
        { renderResults.length > 0 && renderResults }
      </div>
    );
  }
}

ListResults.defaultProps = { searchResults: [] };

ListResults.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
    }),
  ),
};
