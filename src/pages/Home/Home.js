import React, { Component } from 'react';
import ListCategories from '../../components/ListCategories';
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
              <ListCategories />
              <p
                data-testid="home-initial-message"
              >
                Digite algum termo de pesquisa ou escolha uma categoria.

              </p>
            </>
          )}
      </section>
    );
  }
}

export default Home;
