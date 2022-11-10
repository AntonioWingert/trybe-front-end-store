import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../../services/api';
import './ListCategories.css';

class ListCategories extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    const { returnState } = this.props;
    return (
      <section className="categories-container">
        <p className="categories-title">Categorias</p>
        {categories.map((category) => (
          <div key={ category.id }>
            <button
              type="button"
              data-testid="category"
              onClick={ (e) => returnState(e, category.id) }
            >
              {category.name}
            </button>
          </div>
        ))}
      </section>
    );
  }
}

ListCategories.propTypes = {
  returnState: PropTypes.func.isRequired,
};

export default ListCategories;
