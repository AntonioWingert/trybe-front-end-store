import React, { Component } from 'react';
import { getCategories } from '../services/api';
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
      <section>
        {categories.map((category) => (
          <>
            <br />
            <button
              type="button"
              key={ category.id }
              data-testid="category"
            >
              {category.id}
            </button>
          </>
        ))}
      </section>
    );
  }
}

export default ListCategories;
