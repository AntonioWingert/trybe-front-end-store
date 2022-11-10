import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductById } from '../../services/api';
import Header from '../../components/Header/Header';
import CartItemsManipulator from
  '../../components/CartItemsManipulator/CartItemsManipulator';
import { setLocalStorage, getLocalStorage } from '../../services/LocalStorage';
import AddButton from '../../components/AddButton/AddButton';

class ProductDetails extends Component {
  state = {
    price: 0,
    title: '',
    thumbnail: '',
    itemsQuantity: 1,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { title, price, thumbnail } = await getProductById(id);
    this.setState({ title, price, thumbnail });
  }

  saveItemStorage = () => {
    const { price, title, thumbnail, itemsQuantity } = this.state;
    const objItem = {
      price,
      title,
      thumbnail,
      itemsQuantity,
    };
    const localStorage = getLocalStorage();
    const newLocalStorage = [...localStorage, objItem];
    setLocalStorage(JSON.stringify(newLocalStorage));
  };

  addItem = () => {
    this.setState((state) => ({ itemsQuantity: state.itemsQuantity + 1 }));
  };

  removeItem = () => {
    this.setState((state) => ({ itemsQuantity: state.itemsQuantity - 1 }));
  };

  render() {
    const { price, title, thumbnail, itemsQuantity } = this.state;
    return (
      <section className="product-page">
        <Header />
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <h1 data-testid="product-detail-name">{ title }</h1>
        <h2 data-testid="product-detail-price">
          { `R$: ${price}` }
        </h2>
        <CartItemsManipulator
          itemsQuantity={ itemsQuantity }
          addItem={ this.addItem }
          removeItem={ this.removeItem }
        />
        <AddButton saveItemStorage={ this.saveItemStorage } />
      </section>
    );
  }
}

ProductDetails.defaultProps = {
  match: {},
};

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default ProductDetails;
