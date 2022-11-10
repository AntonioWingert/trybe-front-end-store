import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CartItemsManipulator.css';

class CartItemsManipulator extends Component {
  render() {
    const { itemsQuantity, addItem, removeItem } = this.props;
    return (
      <>
        <button type="button" onClick={ addItem }>+</button>
        <button type="button" onClick={ removeItem }>-</button>
        <div>{ itemsQuantity }</div>
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
