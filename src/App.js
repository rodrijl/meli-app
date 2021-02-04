import {Switch, Route, BrowserRouter as Router} from "react-router-dom";
import React from 'react';

import Searchbox from './components/Searchbox'
import Products from './components/Products';
import ProductDetails from './components/ProductDetails'
import Message from './components/Message';

import './App.scss';

const App = () => {
  return (
    <Router>
        <Searchbox/>
        <section className="main">
            <Switch>
                <Route exact path="/"><Message text="Bienvenido, inicia tu búsqueda" /></Route>
                <Route exact path="/items"><Products/></Route>
                <Route exact path="/items/:id"><ProductDetails /></Route>
            </Switch>
        </section>
    </Router>
  );
}

export default App;
