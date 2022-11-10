import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddButton extends Component {
  render() {
    const { saveItemStorage } = this.props;
    return (
      <button
        data-testid="product-detail-add-to-cart"
        type="button"
        onClick={ saveItemStorage }
      >
        Adicionar ao Carrinho

      </button>
    );
  }
}

AddButton.propTypes = {
  saveItemStorage: PropTypes.func.isRequired,
};

export default AddButton;
