import { Component } from 'react';

export default class CreateInput extends Component {

  
  render() {
    let error = '';
    let { name, maxLength, handleUserInput, handleOnMouseEnter, value } = this.props;
    let description = this.props.description || name;
    if (name !== 'Cpf') {
      if (value.length === maxLength) error = 'Limite de caracteres atingido';
    }
    return (
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">{description}*:</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input"
                name={name}
                value={value}
                onChange={handleUserInput}
                onMouseEnter={handleOnMouseEnter}
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
