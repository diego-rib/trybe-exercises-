import { Component } from 'react'

export default class CreateCityInput extends Component {
  render() {
    let { name, handleUserInput, handleCityInput, maxLength, value } = this.props;
    let error = '';
    if (value.length === maxLength) error = 'Limite de caracteres atingido';
    return (
      <label>
        {name}*:
        <input
          className="input"
          name={name}
          value={value}
          onChange={handleUserInput}
          onBlur={handleCityInput}
          maxLength={maxLength}
        />
        <span className="error">{error}</span>
      </label>
    )
  }
}
