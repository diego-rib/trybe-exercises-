import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Users extends Component {
  render() {
    const { greetingsMessage, match: { params: { id } } } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <Link to="/" >Back to home</Link>
        <p> { greetingsMessage }, My awesome Users component </p>
        <p>{id}</p>
      </div>
    );
  }
};
