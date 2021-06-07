import React, { Component } from 'react';
import './styles/about.css';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h2>What is a Pokedex?</h2>
        <p>The Pokédex is an electronic device designed to catalogue and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series. The name Pokédex is a neologism including "Pokémon" and "index". The Japanese name is simply "Pokémon Encyclopedia", and it can feature every Pokémon on it depending on the Pokédex.</p>
        <img src="https://i.pinimg.com/originals/9f/d8/d8/9fd8d8fa9315e13ff664fd914a2bcaeb.png" alt="Pokedex with Pikachu" />
      </div>
    )
  }
}