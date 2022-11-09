import React, { Component } from 'react';
import { MdOutlineSearch, MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header-container">
        <div className="input-container">
          <input
            className="input-search"
            type="text"
            placeholder="Digite o que voce busca"
          />
          <MdOutlineSearch className="search-icon" />
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

export default Header;
