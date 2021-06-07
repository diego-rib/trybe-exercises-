import React from 'react';
import './styles/pokemon.css';

import { Link } from 'react-router-dom';

export default class Pokemon extends React.Component {
    render() {
        const { id, name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div>
                <div className="pokemon">
                    <div>
                        <p> {name} </p>
                        <p> {type} </p>
                        <p className="weight"> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                    </div>
                    <img src={image} alt={`${name} sprite`} />
                </div>
                <Link to={`/pokemons/${id}`}>More details</Link>
            </div>
        );
    }
}
