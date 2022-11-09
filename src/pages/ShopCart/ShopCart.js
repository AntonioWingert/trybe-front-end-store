import React, { Component } from 'react';
import Header from '../../components/Header/Header';
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
          <Header />
          <span
            data-testid="shopping-cart-empty-message"
            className="cart-text"
          >
            Seu carrinho está vazio

          </span>
        </div>
      );
    }

    return (
      <main>
        <Header />
        <span>Carrinho com itens</span>
      </main>
    );
  }
}

export default ShopCart;
