import React, { Component } from 'react';
import { MdOutlineSearch, MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Header.css';

class Header extends Component {
  render() {
    const { query, handleChange, handleClick } = this.props;
    return (
      <header className="header-container">
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
        <div className="title-container">
          <h1 className="title">FRONT-END</h1>
          <h3 className="sub-title">online store</h3>
        </div>
        <div>
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            <MdOutlineShoppingCart className="cart-icon" />

          </Link>

        </div>
      </header>
    );
  }
}

Header.propTypes = {
  query: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Header;
