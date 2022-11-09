import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
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
    </>
  );
}

export default App;
