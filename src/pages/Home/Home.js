import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  state = {
    productsList: [],
  };

  render() {
    const { productsList } = this.state;
    const validProducts = productsList.length < 1;

    return (
      <section>
        { validProducts
          && (
            <>
              <p
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.
              </p>
              <Link
                to="/cart"
                data-testid="shopping-cart-button"
              >
                Cart

              </Link>
            </>
          )}
      </section>
    );
  }
}

export default Home;
