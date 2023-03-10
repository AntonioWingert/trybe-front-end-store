import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './StateManipulator.css';

class StateManipulator extends Component {
  state = {
    items: 1,
    maxItems: 9999,
  };

  componentDidMount() {
    const { itemsQuantity, availableQuantity } = this.props;
    this.setState({ items: Number(itemsQuantity), maxItems: Number(availableQuantity) });
  }

  addItem = () => {
    const { maxItems, items } = this.state;
    if (maxItems > items) {
      this.setState((state) => ({ items: state.items + 1 }));
    }
  };

  removeItem = () => {
    const { items } = this.state;
    if (items > 1) {
      this.setState((state) => ({ items: state.items - 1 }));
    }
  };

  render() {
    const { items } = this.state;
    return (
      <div className="container-state-manipulator">
        <button
          type="button"
          onClick={ this.removeItem }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <div
          className="item-state-manipulator"
          data-testid="shopping-cart-product-quantity"
        >
          { items }

        </div>
        <button
          type="button"
          onClick={ this.addItem }
          data-testid="product-increase-quantity"
        >
          +
        </button>
      </div>
    );
  }
}

StateManipulator.propTypes = {
  itemsQuantity: PropTypes.number.isRequired,
  availableQuantity: PropTypes.number.isRequired,
};

export default StateManipulator;
