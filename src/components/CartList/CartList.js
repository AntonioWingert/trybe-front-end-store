import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CartList.css';
import StateManipulator from '../StateManipulator/StateManipulator';

class CartList extends Component {
  render() {
    const { price, title, thumbnail, itemsQuantity, handleDelete, id } = this.props;
    return (
      <main>
        <h1>
          <div className="product-container">
            <img src={ thumbnail } alt={ title } />
            <span data-testid="shopping-cart-product-name">{title}</span>
            <StateManipulator itemsQuantity={ itemsQuantity } />
            {price}
            <button
              type="button"
              data-testid="remove-product"
              onClick={ (e) => handleDelete(e, id) }
            >
              X
            </button>
          </div>
        </h1>
      </main>
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
  handleDelete: PropTypes.func.isRequired,
};

export default CartList;
