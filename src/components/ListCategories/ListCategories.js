import React, { Component } from 'react';
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
    return (
      <section className="categories-container">
        <p className="categories-title">Categorias</p>
        {categories.map((category) => (
          <div key={ category.id }>
            <button
              type="button"
              data-testid="category"
            >
              {category.name}
            </button>
          </div>
        ))}
      </section>
    );
  }
}

export default ListCategories;
