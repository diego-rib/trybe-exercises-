import { Component } from 'react';
import 'bulma/css/bulma.css';

export default class CreateInput extends Component {

  
  render() {
    let error = '';
    let { name, maxLength, handleUserInput, value } = this.props;
    let description = this.props.description || name;
    if (name !== 'Cpf') {
      if (value.length === maxLength) error = 'Limite de caracteres atingido';
    }
    return (
      <div className="field is-horizontal">
        <label className="field-label is-normal">
          <label className="label">
            {description}*:
          </label>
        </label>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea
                className="textarea"
                name={name}
                value={value}
                onChange={handleUserInput}
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
