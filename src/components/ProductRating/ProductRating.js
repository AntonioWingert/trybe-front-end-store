import React, { Component } from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './ProductRating.css';

const RATING = 5;

class ProductRating extends Component {
  state = {
    email: '',
    rating: '',
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

  validateForm = () => {
    const { email, rating } = this.state;
    if (!email || !rating || !email.includes('@')) {
      this.setState({ error: true });
    } else {
      this.setState({ error: false });
    }
  };

  handleRating = (e) => {
    const { id } = e.target;
    this.setState({ rating: id }, this.validateForm);
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
    const { email, description, rating, error, formStorage } = this.state;

    const createRatingStars = (number) => {
      const tempRating = [];
      for (let i = 1; i <= number; i += 1) {
        tempRating.push(<AiOutlineStar
          key={ `${i}` }
          className="product-rating"
          data-testid={ `${i}-rating` }
          id={ `${i}` }
          onClick={ this.handleRating }
        />);
      }
      return tempRating;
    };

    const showStars = createRatingStars(RATING);

    return (
      <>
        <section>
          <div>
            <input
              type="email"
              name="email"
              data-testid="product-detail-email"
              onChange={ this.handleChange }
              value={ email }
            />
            <div className="product-rating-div">
              { showStars }
              { rating }
            </div>
          </div>
          <textarea
            name="description"
            id="description"
            data-testid="product-detail-evaluation"
            onChange={ this.handleChange }
            value={ description }
          />
          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.handleClick }
          >
            Avaliar
          </button>
          {error && <h4 data-testid="error-msg">Campos inválidos</h4>}
        </section>
        <section>
          {formStorage.length > 0 && (
            <div>
              {formStorage.map((item) => (
                <div key={ item.email }>
                  <h4 data-testid="review-card-email">{item.email}</h4>
                  <h5 data-testid="review-card-evaluation">{item.description}</h5>
                  <h5 data-testid="review-card-rating">{item.rating}</h5>
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
