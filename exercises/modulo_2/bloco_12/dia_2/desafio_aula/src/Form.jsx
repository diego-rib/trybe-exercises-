import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textArea: '',
    }

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleTextAreaChange(event) {
    this.setState({ textArea: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Exercicios de fixação</h1>
        <form>
          <label>
            Just do it
            <select>
              <option></option>
              <option>Oi</option>
              <option>Hello</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Write it down:
            <textarea value={this.state.textArea} onChange={this.handleTextAreaChange}></textarea>
          </label>
        </form>
      </div>
    )
  }
}
