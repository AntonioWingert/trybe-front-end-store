import React, { Component } from 'react';
import './ShopCart.css';

class ShopCart extends Component {
  state = {
    buyList: [],
  };

  render() {
    const { buyList } = this.state;

    if (buyList.length < 1) {
      return (
        <div>
          <span
            data-testid="shopping-cart-empty-message"
          >
            Seu carrinho está vazio

          </span>
        </div>
      );
    }

    return (
      <main>
        <span>Carrinho com itens</span>
      </main>
    );
  }
}

export default ShopCart;
