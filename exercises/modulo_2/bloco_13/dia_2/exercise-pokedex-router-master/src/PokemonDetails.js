import React, { Component } from 'react';

import './styles/pokemonDetails.css';

import pokemons from './data';
import Pokemon from './Pokemon';

export default class PokemonDetails extends Component {
  constructor(props) {
    super(props);

    const { getFavorite, pokemon } = this.props;
    const favoritePokemons = getFavorite();

    this.state = {
      pokemon: undefined,
      false: false,
      fav: favoritePokemons.includes(pokemon),
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
    const { setFavorite, value } = this.props;
    return (
      <div className="pokemon-details-container">
        <Pokemon pokemon={pokemon} favorite={value} />
        <p>Summary: { summary }</p>
        <div className="maps-container">
          {
            foundAt.map(({ location, map }) => (
              <div key={location}>
                <p>{location}</p>
                <img src={map} alt={location} />
              </div>
            ))
          }
        </div>
        <label>
          Marcar como favorito?
          <input type="checkbox" name="favorite" checked={value} onChange={() => setFavorite(pokemon)} />
        </label>
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
