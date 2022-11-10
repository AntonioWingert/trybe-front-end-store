import React, { Component } from 'react';
import ListCategories from '../../components/ListCategories/ListCategories';
import Header from '../../components/Header/Header';
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

  returnState = (_e, id) => {
    console.log(id);
  };

  render() {
    const { productsList, query, searchResults } = this.state;
    const validProducts = productsList.length < 1;

    return (
      <section>
        { validProducts
          && (
            <>
              <Header
                query={ query }
                handleChange={ this.handleChange }
                handleClick={ this.handleClick }
              />
              <ListResults
                searchResults={ searchResults }
              />
              <ListCategories returnState={ (e, id) => this.returnState(e, id) } />

              <div className="message-container">
                <p className="main-title">
                  Você ainda não
                  realizou uma busca
                </p>
                <p
                  data-testid="home-initial-message"
                  className="message-empty-list"
                >
                  Digite algum termo de pesquisa ou escolha uma categoria.
                </p>
              </div>
            </>
          )}
      </section>
    );
  }
}

export default Home;
