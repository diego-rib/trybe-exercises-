import React from 'react';
import Pokemon from './Pokemon';
import './styles/pokedex.css';
import CreateButton from './createButton';

class Pokedex extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        newPokemonsList: props.pokemons,
        index: 0,
        disabled: false,
      }

      this.nextPoke = this.nextPoke.bind(this);
      this.setType = this.setType.bind(this);
    }

    nextPoke() {
      this.setState((prevState, _props) => {
        if (prevState.index === this.state.newPokemonsList.length - 1) {
          return {
            index: 0,
          }
        }
        return {
          index: prevState.index + 1,
        };
      });
    }

    setType(event) {
      let newList;
      if (event.target.className === 'all') newList = this.props.pokemons;
      else newList = this.props.pokemons.filter((poke) => poke.type === event.target.className);
      this.setState(() => ({
        newPokemonsList: newList,
        index: 0,
      }));
      if (newList.length === 1) {
        this.setState(() => ({
          disabled: true,
        }));
      } else {
        this.setState(() => ({
          disabled: false,
        }));
      }
    }

    render () {
      const actualPoke = this.state.newPokemonsList[this.state.index];
      const { pokemons } = this.props;
      const uniqTypes = pokemons.map((pokemon) => pokemon.type).filter((type, index, uniqTypes) => uniqTypes.indexOf(type) === index);
      return (
        <div className="pokedex">
          <Pokemon key={actualPoke.id} pokemon={actualPoke} />
            <div className="typeButtons">
                <button onClick={this.setType} className="all">All</button>
                {uniqTypes.map((type) => (<CreateButton key={type} type={type} setType={this.setType} />))}
            </div>
            <button className="nextButton" disabled={this.state.disabled} onClick={this.nextPoke}>Proximo Pokemon</button>
        </div>
      );
    }
}

export default Pokedex;
