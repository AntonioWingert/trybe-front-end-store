import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CartItemsManipulator.css';
import AddButton from '../AddButton/AddButton';
import { setLocalStorage } from '../../services/LocalStorage';

class CartItemsManipulator extends Component {
  render() {
    const { itemsQuantity } = this.props;
    saveItems = () => {
      items = {
        itemsQuantity,

    };

    return (
      <>
        <div>
          <button type="button" onClick={ this.saveItems }>-</button>
          <span
            data-testid="shopping-cart-product-quantity"
          >
            { itemsQuantity }

          </span>
          <button type="button">+</button>
        </div>
        <AddButton />
      </>
    );
  }
}

CartItemsManipulator.propTypes = {
  itemsQuantity: PropTypes.number.isRequired,
};

export default CartItemsManipulator;
