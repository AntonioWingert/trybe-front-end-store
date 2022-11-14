import React, { Component } from 'react';
import { MdOutlineSearch, MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends Component {
  render() {
    const { query, handleChange, handleClick, itemsOnCart } = this.props;
    return (
      <header className="container">
        <div className="header-container">
          <div className="input-container">
            <input
              className="input-search"
              type="text"
              data-testid="query-input"
              placeholder="Digite o que voce busca"
              value={ query }
              onChange={ handleChange }
            />
            <button
              type="button"
              className="button-search"
              data-testid="query-button"
              onClick={ handleClick }
            >
              <MdOutlineSearch className="search-icon" />
            </button>
          </div>
          <Link to="/" className="title-container">
            <h1 className="title">FRONT-END</h1>
            <h3 className="sub-title">Online Store</h3>
          </Link>
          <div className="cart-button-container">
            <Link
              to="/cart"
              data-testid="shopping-cart-button"
            >
              <MdOutlineShoppingCart className="cart-icon" />
              <span
                className="cart-button-span"
                data-testid="shopping-cart-size"
              >
                { itemsOnCart }

              </span>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  query: '',
  handleChange: () => {},
  handleClick: () => {},
  itemsOnCart: 0,
};

Header.propTypes = {
  query: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  itemsOnCart: PropTypes.number,
};

export default Header;
