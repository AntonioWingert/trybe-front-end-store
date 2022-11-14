import React, { Component } from 'react';
import { TiArrowBack } from 'react-icons/ti';
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
        <div className="empty-container-cart">
          <Header itemsOnCart={ itemsOnCart } />
          <span
            data-testid="shopping-cart-empty-message"
            className="empty-cart-text"
          >
            Seu carrinho está vazio

          </span>
        </div>
      );
    }

    return (
      <main>
        <Header itemsOnCart={ itemsOnCart } />
        <Link to="/" className="return-button">
          <TiArrowBack />
          Voltar
        </Link>
        <div className="main-cart-container">
          <div className="cart-container">
            <h1 className="title-cart">Carrinho de Compras</h1>
            {
              buyList.map(({
                price,
                title,
                thumbnail,
                itemsQuantity,
                productID,
                availableQuantity,
              }) => (
                <CartList
                  key={ title }
                  id={ productID }
                  price={ price }
                  title={ title }
                  thumbnail={ thumbnail }
                  itemsQuantity={ itemsQuantity }
                  availableQuantity={ availableQuantity }
                  handleDelete={ (e, str) => this.handleDelete(e, str) }
                />))
            }
          </div>
          <div className="cart-checkout">
            <Link
              to="/checkout"
              className="cart-checkout-link"
              data-testid="checkout-products"
            >
              Finalizar Compra

            </Link>
          </div>

        </div>
      </main>
    );
  }
}

export default ShopCart;
