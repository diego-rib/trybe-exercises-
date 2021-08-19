import React from 'react';
import './styles/App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  // const orderedPokemons = pokemons.sort((a, b) => a.name - b.name);
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;