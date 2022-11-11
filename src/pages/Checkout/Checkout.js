import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom/cjs/react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import Header from '../../components/Header/Header';
import { getLocalStorage } from '../../services/LocalStorage';
import './Checkout.css';

class Checkout extends Component {
  state = {
    productsList: [],
    fullname: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    payment: '',
    error: false,
    redirect: false,
  };

  componentDidMount() {
    const data = getLocalStorage();
    this.setState({ productsList: data });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({ ...prevState, [name]: value }));
  };

  validateForm = () => {
    const {
      productsList,
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      payment,
    } = this.state;

    if (!productsList
      || !fullname || !email || !cpf || !phone || !cep || !address || !payment) {
      this.setState({ error: true });
      return false;
    }

    this.setState({ error: false });
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.validateForm();
    if (validation) {
      localStorage.removeItem('LOCALSTORAGEITEMS');
      this.setState({ redirect: true });
    }
  };

  render() {
    const {
      productsList,
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
      error,
      redirect,
    } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <main>
        <Link to="/" className="return-button-checkout">
          <TiArrowBack />
          Voltar
        </Link>
        <Header />
        <section>
          <div>
            {productsList.map((product) => (
              <h4 key={ product.productID }>{product.title}</h4>
            ))}
          </div>
          <form>
            <input
              type="text"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
              name="fullname"
              id="fullname"
              value={ fullname }
              onChange={ this.handleChange }
            />
            <input
              type="email"
              data-testid="checkout-email"
              placeholder="E-mail"
              name="email"
              id="email"
              value={ email }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              data-testid="checkout-phone"
              placeholder="Telefone"
              name="phone"
              id="phone"
              value={ phone }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              data-testid="checkout-cpf"
              placeholder="CPF"
              name="cpf"
              id="cpf"
              value={ cpf }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              data-testid="checkout-cep"
              placeholder="CEP"
              name="cep"
              id="cep"
              value={ cep }
              onChange={ this.handleChange }
            />
            <input
              type="text"
              data-testid="checkout-address"
              placeholder="Endereço"
              name="address"
              id="address"
              value={ address }
              onChange={ this.handleChange }
            />
            <br />
            <label htmlFor="boleto">
              <input
                type="radio"
                name="payment"
                id="boleto"
                data-testid="ticket-payment"
                value="boleto"
                onChange={ this.handleChange }
              />
              Boleto
            </label>
            <label htmlFor="visa">
              <input
                type="radio"
                name="payment"
                id="visa"
                data-testid="visa-payment"
                value="visa"
                onChange={ this.handleChange }
              />
              Visa
            </label>
            <label htmlFor="master">
              <input
                type="radio"
                name="payment"
                id="master"
                data-testid="master-payment"
                value="master"
                onChange={ this.handleChange }
              />
              Master
            </label>
            <label htmlFor="elo">
              <input
                type="radio"
                name="payment"
                id="elo"
                data-testid="elo-payment"
                value="elo"
                onChange={ this.handleChange }
              />
              Elo
            </label>
            <br />
            <button
              type="submit"
              data-testid="checkout-btn"
              onClick={ this.handleSubmit }
            >
              Comprar
            </button>
          </form>
          { error && <span data-testid="error-msg">Campos inválidos</span> }
        </section>
      </main>
    );
  }
}

export default Checkout;
