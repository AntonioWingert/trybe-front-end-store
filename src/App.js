import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
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
    </>
  );
}

export default App;
