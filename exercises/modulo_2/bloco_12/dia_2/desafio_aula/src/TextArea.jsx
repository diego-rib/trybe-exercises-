import React, { Component } from 'react'

export default class TextArea extends Component {
  render() {
    
    let { handleChange, value } = this.props;

    let errorMessage;
    if(value.length > 50) {
      errorMessage = 'Limite de 50 caracteres!';
    }

    return (
      <label>
        TextArea:
        <textarea
          name="textArea"
          value={value}
          onChange={handleChange}
        />
        <p style={{ color: 'red' }}>{errorMessage}</p>
      </label>
    )
  }
}
