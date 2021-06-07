import React, { Component } from 'react';

import './styles/pokemonDetails.css';

import pokemons from './data';
import Pokemon from './Pokemon';

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: undefined,
      false: false,
    }

    this.findPokemon = this.findPokemon.bind(this);
    this.renderInfo = this.renderInfo.bind(this);
  }

  componentDidMount() {
    const { params } = this.props.match;
    const id = parseInt(params.id, 10);
    this.findPokemon(id);
  }

  renderInfo() {
    const { pokemon } = this.state;
    const {
      foundAt,
      summary,
    } = pokemon;
    return (
      <div className="pokemon-details-container">
        <Pokemon pokemon={pokemon} />
        <p>Summary: { summary }</p>
        <div className="maps-container">
          {
            foundAt.map(({ location, map }) => (
              <div>
                <p>{location}</p>
                <img src={map} alt={location} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  findPokemon(id) {
    const pokemon = pokemons.find((pokemon) => pokemon.id === id);
    this.setState({ pokemon, show: true });
  }

  render() {
    const { show } = this.state;
    return (
      <div>
        {
          show ? this.renderInfo() : null
        }
      </div>
    )
  }
}
