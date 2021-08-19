import React, { Component } from 'react';
import './styles/createButton.css';

class CreateButton extends Component {
  render() {
    return (
      <button onClick={this.props.setType} className={this.props.type}>{this.props.type}</button>
    );
  }
}

export default CreateButton;
