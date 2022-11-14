import React, { Component } from 'react';
import './ListResults.css';
import PropTypes from 'prop-types';
import ProductCard from '../ProductCard/ProductCard';

export default class ListResults extends Component {
  render() {
    const { searchResults, updateState, isFreeShipping, returnFilter } = this.props;
    const renderResults = searchResults
      .map(({
        id, title, price, thumbnail,
        shipping: { free_shipping: freeShipping },
        available_quantity: availableQuantity }) => (
        (
          <ProductCard
            key={ id }
            id={ id }
            title={ title }
            price={ price }
            thumbnail={ thumbnail }
            updateState={ updateState }
            isFreeShipping={ isFreeShipping(freeShipping) }
            availableQuantity={ availableQuantity }
          />
        )
      ));

    return (
      <section className="main-list-results">
        <div className="select-list-results">
          <select
            className="select-results"
            name="sort-products"
            id="sort-products"
            onChange={ returnFilter }
          >
            <option value="">Ordenar por preço</option>
            <option value="cheapest">Menor Preço</option>
            <option value="priciest">Maior Preço</option>
            <option value="free">Frete Grátis</option>
          </select>
        </div>
        <div className="list-container">
          { renderResults.length > 0 && renderResults }
        </div>
      </section>
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
  isFreeShipping: PropTypes.func.isRequired,
  returnFilter: PropTypes.func.isRequired,
};
