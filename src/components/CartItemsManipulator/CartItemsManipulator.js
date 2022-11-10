import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CartItemsManipulator.css';

class CartItemsManipulator extends Component {
  render() {
    const { itemsQuantity, addItem, removeItem } = this.props;
    return (
      <>
        <button type="button" onClick={ addItem }>+</button>
        <div data-testid="shopping-cart-product-quantity">{ itemsQuantity }</div>
        <button type="button" onClick={ removeItem }>-</button>

      </>
    );
  }
}

CartItemsManipulator.propTypes = {
  itemsQuantity: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItemsManipulator;
