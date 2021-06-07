import React from 'react';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

import './styles/App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

export default function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
        <Switch>
          <Route path="/pokemons/:id" render={(props) => <PokemonDetails {...props} pokemons={pokemons} /> } />
          <Route exact path="/">
            <Pokedex pokemons={pokemons} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
