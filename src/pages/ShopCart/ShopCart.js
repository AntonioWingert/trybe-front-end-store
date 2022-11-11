import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartList from '../../components/CartList/CartList';
import Header from '../../components/Header/Header';
import { getLocalStorage, setLocalStorage } from '../../services/LocalStorage';
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

  handleDelete = (_e, id) => {
    const { buyList } = this.state;
    const newList = buyList.filter((item) => item.productID !== id);
    setLocalStorage(JSON.stringify(newList));
    this.setState({ buyList: newList });
  };

  render() {
    const { buyList } = this.state;
    const itemsOnCart = Number(buyList.length);

    if (buyList.length < 1) {
      return (
        <div>
          <Header itemsOnCart={ itemsOnCart } />
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
        <Header itemsOnCart={ itemsOnCart } />
        <section>
          <div>
            {
              buyList.map(({ price, title, thumbnail, itemsQuantity, productID }) => (
                <CartList
                  key={ title }
                  id={ productID }
                  price={ price }
                  title={ title }
                  thumbnail={ thumbnail }
                  itemsQuantity={ itemsQuantity }
                  handleDelete={ (e, str) => this.handleDelete(e, str) }
                />))
            }
          </div>
          <Link to="/checkout" data-testid="checkout-products">Finalizar</Link>
        </section>
      </main>
    );
  }
}

export default ShopCart;
