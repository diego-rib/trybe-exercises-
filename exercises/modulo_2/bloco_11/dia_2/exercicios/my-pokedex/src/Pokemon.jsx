import React from 'react';
import './App.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="pokemon">
        <div className="pokemon-box">
        <div>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>Average weight: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
        </div>
        <img src={pokemon.image} alt="Pokemon" />
        </div>
      </div>
    )
  }
}

export default Pokemon;