import React from 'react';
import { Link } from 'react-router-dom';
import './styles/pokemon.css';

export default class Pokemon extends React.Component {
    render() {
        const { id, name, type, averageWeight, image } = this.props.pokemon;
        const show = this.props.showMore || false;
        return (
            <div className="pokemon">
                <div className="pokemon-info">
                    <div>
                        <p> {name} </p>
                        <p> {type} </p>
                        <p className="weight"> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                    </div>
                    <img src={image} alt={`${name} sprite`} />
                </div>
                {
                    show ? <Link className="more-details" to={`/pokemons/${id}`}>More details</Link> : null
                }
            </div>
        );
    }
}
