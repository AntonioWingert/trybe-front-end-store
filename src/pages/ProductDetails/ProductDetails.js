import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductById } from '../../services/api';

class ProductDetails extends Component {
  state = {
    price: 0,
    title: '',
    thumbnail: '',
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const { title, price, thumbnail } = await getProductById(id);
    this.setState({ title, price, thumbnail });
  }

  render() {
    const { price, title, thumbnail } = this.state;
    return (
      <section className="product-page">
        <img src={ thumbnail } alt={ title } data-testid="product-detail-image" />
        <h1 data-testid="product-detail-name">{ title }</h1>
        <h2 data-testid="product-detail-price">
          R$
          {' '}
          { price }
        </h2>
        <button type="button" data-testid="shopping-cart-button">
          <Link to="/cart">Carrinho</Link>
        </button>
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
