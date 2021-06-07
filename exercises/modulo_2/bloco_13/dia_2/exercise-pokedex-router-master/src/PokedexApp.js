import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './styles/App.css';
import pokemons from './data';

import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import PageNotFound from './PageNotFound';

export default class PokedexApp extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/pokemons/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} /> } />
          <Route path="/about" component={About} />
          <Route exact path="/" render={() => <Pokedex pokemons={pokemons} />} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}