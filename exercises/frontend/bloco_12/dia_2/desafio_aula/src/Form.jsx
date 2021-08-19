import { Component, createRef } from 'react';
import './Form.css';
import Select from './Select.jsx';
import TextArea from './TextArea.jsx';

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      saudation: '',
      textArea: '',
      checkbox: false,
      validTextArea: false,
      validEmail: false,
      validForm: false,
    }

    this.handleChange = this.handleChange.bind(this);
    this.showImage = this.showImage.bind(this);
    this.checkFormErrors = this.checkFormErrors.bind(this);
    this.checkFormElementError = this.checkFormElementError.bind(this);
    this.changeButton = this.changeButton.bind(this);
    this.fileInput = createRef();
  }

  changeButton() {
    this.setState((prevState) => ({ formButton: !prevState.validForm }));
  }

  checkFormErrors() {
    const { validEmail, validTextArea } = this.state;
    const allValid = validEmail && validTextArea;
    this.setState({ validForm: allValid }, () => { this.changeButton() });
  }

  checkFormElementError(name, value) {
    switch (name) {
      case 'textArea': 
        if (value.length > 50 || value.trim().length === 0) this.setState(() => ({ validTextArea: false }), this.checkFormErrors);
        else this.setState(() => ({ validTextArea: true }), this.checkFormErrors);
        break;
      case 'email':
        const reg = new RegExp(/^\S+@\S+\.\S+$/);
        const valid = reg.test(value);
        if (valid) this.setState(() => ({ validEmail: true }), this.checkFormErrors);
        else this.setState(() => ({ validEmail: false }), this.checkFormErrors);
        break;
      default:
        break;
    }
  }

  showImage() {
    console.log(this.fileInput.current.files[0].name);
  }

  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => this.checkFormElementError(name, value));
  }

  render() {
    return (
      <div>
        <h1>Exercicios de fixação</h1>
        <form className="form">
          <input onChange={this.handleChange} name="email" type="email" placeholder="email" />
          <Select
            value={this.state.saudation}
            handleChange={this.handleChange}
          />
          <TextArea
            handleError={this.checkFormElementError}
            value={this.state.textArea}
            handleChange={this.handleChange}
          />
          <fieldset>
            <label>
              <input name="checkbox" type="checkbox" onChange={this.handleChange} />
              CheckBox
            </label>
            <label>
              Upload
              <input type="file" ref={this.fileInput} onChange={this.showImage} />
            </label>
          </fieldset>
          <button type="submit" disabled={!this.state.validForm}>Enviar</button>
        </form>
      </div>
    )
  }
}
