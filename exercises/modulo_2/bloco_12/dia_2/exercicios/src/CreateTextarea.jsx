import { Component } from 'react';

export default class CreateInput extends Component {

  
  render() {
    let error = '';
    let { name, maxLength, handleUserInput, handleOnMouseEnter, value } = this.props;
    if (name !== 'Cpf') {
      if (value.length === maxLength) error = 'Limite de caracteres atingido';
    }
    return (
      <label>
        {name}*:
        <input
          className="input"
          name={name}
          value={value}
          onChange={handleUserInput}
          onMouseEnter={handleOnMouseEnter}
          maxLength={maxLength}
        />
        <span className="error">{error}</span>
      </label>
    )
  }
}
