import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getLocalStorage, setLocalStorage } from '../../services/LocalStorage';
import './ProductCard.css';

class ProductCard extends Component {
  handleClick = (_e, obj) => {
    const { updateState } = this.props;
    const data = getLocalStorage();
    const newData = [...data, obj];
    setLocalStorage(JSON.stringify(newData));
    updateState();
  };

  render() {
    const { title, price, thumbnail, id: productID, isFreeShipping } = this.props;
    const sendObj = { title, price, thumbnail, productID, itemsQuantity: 1 };
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <Link
          className="product-link"
          to={ `/product/${productID}` }
          data-testid="product-detail-link"
        >
          <img
            className="product-image"
            src={ thumbnail }
            alt={ `${title} ${productID}` }
          />
          <h4 className="product-title">{ title }</h4>
          <span>{ isFreeShipping }</span>
          <h5 className="product-price">{ `R$: ${Number(price).toFixed(2)}`}</h5>

        </Link>
        <button
          className="product-button"
          data-testid="product-add-to-cart"
          type="button"
          onClick={ (e) => this.handleClick(e, sendObj) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  updateState: PropTypes.func.isRequired,
  isFreeShipping: PropTypes.string.isRequired,
};

export default ProductCard;
