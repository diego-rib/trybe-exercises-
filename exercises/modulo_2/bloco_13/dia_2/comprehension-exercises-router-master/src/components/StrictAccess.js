import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default class StrictAccess extends Component {
  constructor() {
    super();

    this.state = {
      shouldRedirect: false,
    }

    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    this.setState({ shouldRedirect: true });
  }

  componentDidMount() {
    const { username, password } = this.props.user;
    if (username !== 'joao' || password !== "1234") {
      alert('Access denied')
      this.redirect();
    }
  }

  render() {
    const { username } = this.props.user;
    const { shouldRedirect } = this.state;
    if (shouldRedirect) return <Redirect to="/" />;
    return (
      <div>
        <p>Welcome {username}!</p>
        <Link to="/" >Back to home</Link>
      </div>
    )
  }
}
