import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>
          <Link to="/users/10">Users</Link>
        </div>
        <div>
          <Link to="/strict-access">Login</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <p> My awesome Home component </p>
      </div>
    );
  }
}
