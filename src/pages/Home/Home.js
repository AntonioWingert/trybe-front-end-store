import React, { Component } from 'react';
import Header from '../../components/Header/Header';
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
            <div>
              <Header />
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
            </div>
          )}
      </section>
    );
  }
}

export default Home;
