import React, { Component } from 'react';
import ListCategories from '../../components/ListCategories';
import { getProductsFromQuery } from '../../services/api';
import './Home.css';
import ListResults from '../../components/ListResults';

class Home extends Component {
  state = {
    productsList: [],
    query: '',
    searchResults: [],
  };

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleClick = async () => {
    const { query } = this.state;
    const data = await getProductsFromQuery(query);
    this.setState({ searchResults: data.results });
  };

  render() {
    const { productsList, query, searchResults } = this.state;
    const validProducts = productsList.length < 1;

    return (
      <section>
        { validProducts
          && (
            <>
              <div>
                <input
                  type="text"
                  data-testid="query-input"
                  value={ query }
                  onChange={ this.handleChange }
                />
                <button
                  type="button"
                  data-testid="query-button"
                  onClick={ this.handleClick }
                >
                  Pesquisar
                </button>
              </div>
              <ListResults searchResults={ searchResults } />
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
