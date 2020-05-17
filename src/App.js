import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PageNotFound } from './pages/PageNotFound';
import { Details } from './pages/Details';
import { Peliculas } from './pages/Peliculas';
import { Nosotros } from './pages/Nosotros';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/details/:movieId' component={Details} />
        <Route exact path='/peliculas' component={Peliculas} />
        <Route exact path='/nosotros' component={Nosotros} />

        <Route component={PageNotFound} />
      </Switch>


    </div>
  );
}

export default App;
