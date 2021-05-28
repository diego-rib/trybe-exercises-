import { Component, createRef } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      saudation: '',
      textArea: '',
      seeking: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.showImage = this.showImage.bind(this);
    this.fileInput = createRef();
  }

  showImage() {
    console.log(this.fileInput.current.files[0].name);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Exercicios de fixação</h1>
        <form className="form">
          <label>
            DropDown Select
            <select 
              name="saudation" 
              value={this.state.saudation} 
              onChange={this.handleChange}
            >
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </label>
          <label>
            TextArea:
            <textarea 
            name="textArea" 
            value={this.state.textArea} 
            onChange={this.handleChange}
            />
          </label>
          <label>
            <input name="seeking" type="checkbox" onChange={this.handleChange} />
            CheckBox
          </label>
          <label>
            Upload
            <input type="file" ref={this.fileInput} onChange={this.showImage} />
          </label>
        </form>
      </div>
    )
  }
}
