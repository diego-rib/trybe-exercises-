import React, { Component } from 'react';
import './App.css';


export default class FetchPersonalInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dataJSON: undefined,
      loading: true,
    }

    this.renderInfo = this.renderInfo.bind(this);
  }

  shouldComponentUpdate(_nextProps, nextState) {
    let age = 51;
    if (nextState.dataJSON) age = nextState.dataJSON.dob.age;
    return age <= 50;
  }

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const data = await fetch("https://api.randomuser.me/");
      const { results } = await data.json();
      this.setState({ dataJSON: results[0], loading: false });
    });
  }

  renderInfo() {
    const {
      dataJSON: {
        name: { title, first, last },
        email,
        dob: { age },
        picture: { large },
      }
    } = this.state;
    return (
      <div className="api-content">
        <img src={ large } alt={`${first} ${last}`} />
        <p>{ `${title}. ${first} ${last}` }</p>
        <p>{ email }</p>
        <p>Idade: { age }</p>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div>
        {
          loading ? (
            <div className="loading">Loading...</div>
          ) : this.renderInfo()
        }
      </div>
    )
  }
}
