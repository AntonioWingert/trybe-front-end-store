import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddButton from '../AddButton/AddButton';
import CartItemsManipulator from '../CartItemsManipulator/CartItemsManipulator';
import './CartList.css';

class CartList extends Component {
  render() {
    const { price, title, thumbnail, itemsQuantity } = this.props;
    return (
      <main>
        <h1>
          <div className="product-container">
            <img src={ thumbnail } alt={ title } />
            {title}
            <CartItemsManipulator itemsQuantity={ itemsQuantity } />
            {price}
            <AddButton />
          </div>
        </h1>
      </main>
    );
  }
}

CartList.propTypes = {
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  itemsQuantity: PropTypes.number.isRequired,
};

export default CartList;
