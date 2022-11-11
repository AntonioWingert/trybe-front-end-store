import React, { Component } from 'react';
import ListCategories from '../../components/ListCategories/ListCategories';
import Header from '../../components/Header/Header';
import { getProductsFromQuery, getProductsFromCategory } from '../../services/api';
import './Home.css';
import ListResults from '../../components/ListResults/ListResults';

class Home extends Component {
  state = {
    productsList: [],
    query: '',
    searchResults: [],
    checkSearch: 0,
  };

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleClick = async () => {
    const { query } = this.state;
    const data = await getProductsFromQuery(query);
    this.setState({ searchResults: data.results, checkSearch: 1 });
  };

  returnState = async (_e, id) => {
    const data = await getProductsFromCategory(id);
    this.setState({ searchResults: data.results });
  };

  render() {
    const { productsList, query, searchResults, checkSearch } = this.state;
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
              <section className="main-container">
                <ListCategories returnState={ (e, id) => this.returnState(e, id) } />

                { searchResults < 1 ? (
                  <div className="message-container">
                    <p className="main-title">
                      { checkSearch
                        ? 'Nenhum produto foi encontrado'
                        : 'Você ainda não realizou uma busca'}
                    </p>
                    <p
                      data-testid="home-initial-message"
                      className="message-empty-list"
                    >
                      Digite algum termo de pesquisa ou escolha uma categoria.
                    </p>
                  </div>)
                  : (
                    <ListResults
                      searchResults={ searchResults }
                    />)}
              </section>
            </>
          )}
      </section>
    );
  }
}

export default Home;
