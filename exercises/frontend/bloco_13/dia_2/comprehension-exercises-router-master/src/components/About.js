import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <Link to="/" >Back to home</Link>
        <p> My awesome About component </p>
      </div>
    );
  }
}
