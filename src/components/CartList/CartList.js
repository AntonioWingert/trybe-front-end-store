import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin5Line } from 'react-icons/ri';
import './CartList.css';
import StateManipulator from '../StateManipulator/StateManipulator';

class CartList extends Component {
  render() {
    const {
      price,
      title,
      thumbnail,
      itemsQuantity,
      availableQuantity,
      handleDelete,
      id } = this.props;
    return (
      <div className="product-container">
        <button
          type="button"
          data-testid="remove-product"
          onClick={ (e) => handleDelete(e, id) }
          className="product-delete"
        >
          <RiDeleteBin5Line />
        </button>
        <img src={ thumbnail } alt={ title } />
        <p
          className="product-name"
          data-testid="shopping-cart-product-name"
        >
          {title}

        </p>
        <StateManipulator itemsQuantity={ itemsQuantity } />
        <p className="price-product">

          {`R$: ${Number(price).toFixed(2)}`}

        </p>
      </div>
    );
  }
}

CartList.defaultProps = {
  id: '',
};

CartList.propTypes = {
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  itemsQuantity: PropTypes.number.isRequired,
  availableQuantity: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CartList;
