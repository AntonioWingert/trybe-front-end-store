import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CartItemsManipulator.css';

class CartItemsManipulator extends Component {
  render() {
    const { itemsQuantity, addItem, removeItem } = this.props;
    return (
      <div className="items-manipulator-container">
        <button type="button" onClick={ removeItem }>-</button>
        <div
          className="items-container"
          data-testid="shopping-cart-product-quantity"
        >
          { itemsQuantity }

        </div>
        <button type="button" onClick={ addItem }>+</button>
      </div>
    );
  }
}

CartItemsManipulator.propTypes = {
  itemsQuantity: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};

export default CartItemsManipulator;
