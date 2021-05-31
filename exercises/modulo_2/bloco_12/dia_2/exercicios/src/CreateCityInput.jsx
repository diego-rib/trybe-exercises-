import { Component } from 'react';
import 'bulma/css/bulma.css';

export default class CreateCityInput extends Component {
  render() {
    let { name, handleUserInput, handleCityInput, maxLength, value } = this.props;
    let error = '';
    if (value.length === maxLength) error = 'Limite de caracteres atingido';
    return (
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">{name}*:</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                name={name}
                value={value}
                onChange={handleUserInput}
                onBlur={handleCityInput}
                maxLength={maxLength}
              />
            </div>
            <p className="help is-danger">{error}</p>
          </div>
        </div>
      </div>
    )
  }
}
