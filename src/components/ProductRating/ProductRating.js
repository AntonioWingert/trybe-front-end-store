import React, { Component } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './ProductRating.css';

const RATING = 5;

class ProductRating extends Component {
  state = {
    email: '',
    rating: 0,
    description: '',
    error: false,
    formStorage: [],
  };

  componentDidMount() {
    const { id } = this.props;
    if (localStorage[id]) {
      const savedStorage = JSON.parse(localStorage.getItem(id));
      this.setState({ formStorage: savedStorage });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleRating = (e) => {
    const { id } = e.target;
    this.setState({ rating: id });
  };

  handleClick = () => {
    const { description, email, rating, formStorage } = this.state;
    const { id } = this.props;
    if (!email || !rating || !email.includes('@')) {
      this.setState({ error: true });
      return;
    }
    const newForm = { description, email, rating };
    const newFormStorage = [...formStorage, newForm];
    localStorage.setItem(id, JSON.stringify(newFormStorage));
    this.setState({
      email: '', rating: 0, description: '', error: false, formStorage: newFormStorage,
    });
  };

  render() {
    const { email, description, error, formStorage } = this.state;

    const createRatingStars = (number) => {
      const { rating } = this.state;
      const tempRating = [];
      for (let i = 1; i <= number; i += 1) {
        tempRating.push(rating >= i
          ? (
            <AiFillStar
              key={ i }
              className="product-rating"
              data-testid={ `${i}-rating` }
              id={ i }
              onClick={ this.handleRating }
            />)
          : (
            <AiOutlineStar
              key={ i }
              className="product-rating"
              data-testid={ `${i}-rating` }
              id={ i }
              onClick={ this.handleRating }
            />));
      }
      return tempRating;
    };

    const showStars = createRatingStars(RATING);

    return (
      <>
        <section className="form-card">
          <h1 className="form-title">Avaliações</h1>
          <div className="wrap-inputs">
            <div className="form-input-container">
              <input
                type="email"
                name="email"
                data-testid="product-detail-email"
                placeholder="E-mail"
                onChange={ this.handleChange }
                value={ email }
                className="product-detail-email"
              />
              <div className="product-rating-div">
                { showStars }
              </div>
            </div>
            <textarea
              name="description"
              id="description"
              placeholder="Mensagem (opcional)"
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
              value={ description }
              className="product-detail-description"
            />
          </div>
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.handleClick }
            className="button-product-description"
          >
            Avaliar
          </button>
          {error && (
            <h4
              data-testid="error-msg"
              className="error-msg"
            >
              Campos inválidos
            </h4>)}
        </section>
        <section>
          {formStorage.length > 0 && (
            <div className="available-comments-container">
              {formStorage.map((item) => (
                <div key={ item.email } className="description-card">
                  <div className="email-rating-card">
                    <h4
                      className="review-card-email"
                      data-testid="review-card-email"
                    >
                      {item.email}

                    </h4>
                    <h5
                      className="review-card-rating"
                      data-testid="review-card-rating"
                    >
                      {item.rating}

                    </h5>
                  </div>
                  <p
                    className="review-card-evaluation"
                    data-testid="review-card-evaluation"
                  >
                    {item.description}

                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </>
    );
  }
}

// Provavelmente, teremos q voltar para isso aqui.
// {/* <AiOutlineStar className="product-rating" data-testid="$1-rating" id="1" onClick={ this.handleRating } />
// <AiOutlineStar className="product-rating" data-testid="$2-rating" id="2" onClick={ this.handleRating } />
// <AiOutlineStar className="product-rating" data-testid="$3-rating" id="3" onClick={ this.handleRating } />
// <AiOutlineStar className="product-rating" data-testid="$4-rating" id="4" onClick={ this.handleRating } />
// <AiOutlineStar className="product-rating" data-testid="$5-rating" id="5" onClick={ this.handleRating } />  */}

ProductRating.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ProductRating;
