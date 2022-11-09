import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <Route exact path="/">
      <Home />
    </Route>

  );
}

export default App;
