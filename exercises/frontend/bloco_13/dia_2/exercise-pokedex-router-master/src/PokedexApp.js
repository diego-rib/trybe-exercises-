import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './styles/App.css';
import pokemons from './data';

import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';
import About from './About';
import PageNotFound from './PageNotFound';

export default class PokedexApp extends React.Component {
  constructor() {
    super();

    this.state = {
      value: false,
      favoritePokemons: [],
    }
    this.setFavorite = this.setFavorite.bind(this);
    this.getFavorite = this.getFavorite.bind(this);
  }

  getFavorite() {
    const { favoritePokemons } = this.state;
    return favoritePokemons;
  }

  setFavorite( pokemon ) {
    const { value } = this.state;
    let { favoritePokemons } = this.state;
    if (!value) {
      this.setState(() => ({
        favoritePokemons: [...favoritePokemons, pokemon],
        value: true,
      }));
    } else {
      favoritePokemons.pop();
      this.setState(() => ({
        favoritePokemons,
        value: false,
      }));
    }
  }

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/pokemons/:id" render={(props) => <PokemonDetails
            {...props}
            pokemons={pokemons}
            setFavorite={this.setFavorite}
            value={value}
            getFavorite={this.getFavorite}
          /> } />
          <Route path="/about" component={About} />
          <Route exact path="/" render={() => <Pokedex pokemons={pokemons} getFavorite={this.getFavorite} />} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    )
  }
}