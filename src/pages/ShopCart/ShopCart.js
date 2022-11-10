import React, { Component } from 'react';
import CartList from '../../components/CartList/CartList';
import Header from '../../components/Header/Header';
import { getLocalStorage } from '../../services/LocalStorage';
import './ShopCart.css';

class ShopCart extends Component {
  state = {
    buyList: [],
  };

  componentDidMount() {
    this.getStorage();
  }

  getStorage = () => {
    const localStorage = getLocalStorage();
    this.setState({
      buyList: localStorage,
    });
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
        <span
          data-testid="shopping-cart-product-name"
        >
          {
            buyList.map(({ price, title, thumbnail, itemsQuantity }) => (
              <CartList
                key={ title }
                price={ price }
                title={ title }
                thumbnail={ thumbnail }
                itemsQuantity={ itemsQuantity }

              />))
          }

        </span>
      </main>
    );
  }
}

export default ShopCart;
