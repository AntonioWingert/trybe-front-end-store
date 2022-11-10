import React, { Component } from 'react';

class AddButton extends Component {
  render() {
    return (
      <button
        data-testid="product-detail-add-to-cart"
        type="button"
      >
        Adicionar ao Carrinho

      </button>
    );
  }
}

export default AddButton;
