import React, { Component } from 'react'

export default class Select extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        DropDown Select
        <select 
          name="saudation" 
          value={value} 
          onChange={handleChange}
        >
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </label>
    )
  }
}
