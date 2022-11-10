import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <h4>{ title }</h4>
        <h5>{ price }</h5>
        <img src={ thumbnail } alt={ `${title} ${id}` } />
        <Link to={ `/product/${id}` } data-testid="product-detail-link">Detalhes</Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;
