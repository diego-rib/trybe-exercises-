import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pokemons from './data';

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
    const { pokemon: {
      image,
      name,
      type,
      averageWeight: { value, measurementUnit },
      foundAt,
      summary,
      moreInfo
    } } = this.state;
    return (
      <div>
        <img src={ image } alt={name} />
        <p>Nome: { name }</p>
        <p>Tipo: { type }</p>
        <p>Peso: { value }{measurementUnit}</p>
        <p>Summary: { summary }</p>
        {
          foundAt.map(({ location, map }) => (
            <div>
              <p>{location}</p>
              <img src={map} alt={location} />
            </div>
          ))
        }
        <a href={moreInfo}>Mais informações aqui</a>
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
        <Link to="/">Back to home</Link>
        {
          show ? this.renderInfo() : null
        }
      </div>
    )
  }
}
