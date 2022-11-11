import React, { Component } from 'react';
import './ListResults.css';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';

export default class ListResults extends Component {
  render() {
    const { searchResults, updateState } = this.props;
    const renderResults = searchResults.map(({ id, title, price, thumbnail }) => (
      <ProductCard
        key={ id }
        id={ id }
        title={ title }
        price={ price }
        thumbnail={ thumbnail }
        updateState={ updateState }
      />
    ));

    return (
      <div className="list-container">
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
  updateState: PropTypes.func.isRequired,
};
