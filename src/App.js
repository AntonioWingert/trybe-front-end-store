import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Checkout from './pages/Checkout/Checkout';
import Home from './pages/Home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import ShopCart from './pages/ShopCart/ShopCart';

function App() {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cart">
        <ShopCart />
      </Route>
      <Route path="/product/:id" render={ (props) => <ProductDetails { ...props } /> } />
      <Route path="/checkout">
        <Checkout />
      </Route>
    </>
  );
}

export default App;
