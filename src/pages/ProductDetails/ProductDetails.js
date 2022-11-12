import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductDetails.css';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { getProductById } from '../../services/api';
import ProductRating from '../../components/ProductRating/ProductRating';
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
    productID: '',
    itemsQuantity: 1,
    itemsOnCart: 0,
    freeShipping: false,
    availableQuantity: 0,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const {
      title,
      price,
      thumbnail,
      available_quantity: availableQuantity,
      shipping: { free_shipping: freeShipping } } = await getProductById(id);
    this.setState({
      title,
      price,
      thumbnail,
      productID: id,
      freeShipping,
      availableQuantity,
    });
    this.updateState();
  }

  updateState = () => {
    const localStorage = getLocalStorage();
    const localLength = Number(localStorage.length);
    this.setState({ itemsOnCart: localLength });
  };

  saveItemStorage = () => {
    const {
      price,
      title,
      thumbnail,
      itemsQuantity,
      productID,
      freeShipping,
      availableQuantity } = this.state;
    const objItem = {
      price,
      title,
      thumbnail,
      itemsQuantity,
      productID,
      freeShipping,
      availableQuantity,
    };
    const localStorage = getLocalStorage();
    const newLocalStorage = [...localStorage, objItem];
    setLocalStorage(JSON.stringify(newLocalStorage));
    this.updateState();
  };

  addItem = () => {
    this.setState((state) => ({ itemsQuantity: state.itemsQuantity + 1 }));
  };

  removeItem = () => {
    this.setState((state) => ({ itemsQuantity: state.itemsQuantity - 1 }));
  };

  render() {
    const { match: { params: { id } } } = this.props;
    const {
      price,
      title,
      thumbnail,
      itemsQuantity,
      itemsOnCart,
      freeShipping,
      availableQuantity } = this.state;
    console.log(availableQuantity);
    return (
      <div>
        <Header itemsOnCart={ itemsOnCart } />
        <Link to="/" className="return-button">
          <TiArrowBack />
          Voltar
        </Link>
        <section className="product-page">
          <div className="product-container-details">
            <h1
              className="product-detail-name"
              data-testid="product-detail-name"
            >
              { title }
            </h1>
            <img
              className="product-image-details"
              src={ thumbnail }
              alt={ title }
              data-testid="product-detail-image"
            />

          </div>
          <div className="product-price-container">
            <h1 className="product-details-specs">Especificações:</h1>
            <h4 className="product-details-description">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestiae ducimus architecto
              dolorem vel nemo, reprehenderit voluptatum quam
              facilis consequatur quae eos nam, ipsa eligendi
              similique, reiciendis aliquid. Accusamus, quo ipsum?
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Molestiae ducimus architecto
              dolorem vel nemo, reprehenderit voluptatum quam
              facilis consequatur quae eos nam, ipsa eligendi
              similique, reiciendis aliquid. Accusamus, quo ipsum?
            </h4>
            { freeShipping && <img
              className="free-shipping-image"
              src="https://img.icons8.com/ios/500/free-shipping.png"
              alt="frete gratis"
            />}
            <div className="price-button-container">
              <h2
                className="product-detail-price"
                data-testid="product-detail-price"
              >
                { `R$: ${Number(price).toFixed(2)}` }
              </h2>
              <CartItemsManipulator
                itemsQuantity={ itemsQuantity }
                addItem={ this.addItem }
                removeItem={ this.removeItem }
              />
              <AddButton saveItemStorage={ this.saveItemStorage } />
            </div>
          </div>
        </section>
        <section className="available-page">
          <ProductRating id={ id } />
        </section>
      </div>
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
