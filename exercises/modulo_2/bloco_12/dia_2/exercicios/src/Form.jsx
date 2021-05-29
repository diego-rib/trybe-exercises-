import { Component } from 'react';
import './Form.css';
import CreateInput from './CreateInput.jsx';
import CreateCityInput from './CreateCityInput.jsx';
import CreateTextarea from './CreateTextarea.jsx';
import CreateCurriculum from './CreateCurriculum.jsx';

const initialState = {
  estados: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'],
  Nome: '',
  Email: '',
  Cpf: '',
  Endereço: '',
  Cidade: '',
  Estado: '',
  Moradia: '',
  Resumo: '',
  Cargo: '',
  hasTriggered: false,
  Curriculum: false,
  actualData: [],
};

export default class Form extends Component {
  constructor() {
    super()

    this.state = initialState;

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleCityInput = this.handleCityInput.bind(this);
    this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.showCurriculum = this.showCurriculum.bind(this);
    this.getValues = this.getValues.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  validateCpf(cpf) {
    for(let index = 0; index < 11; index += 1) {
      if(!parseInt(cpf[index])) {
        return false;
      }
    }
    return true;
  }

  handleReset(event) {
    event.preventDefault();
    this.setState(initialState);
  }

  getValues() {
    return this.state.actualData;
  }

  showCurriculum() {
    this.setState({ Curriculum: true });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const { Nome, Email, Cpf, Endereço, Cidade, Estado, Moradia, Resumo, Cargo } = this.state;
    const invalidData = [];
    const validData = [];
    Nome.trim() !== '' ? validData.push(Nome) : invalidData.push('Nome');
    Email.match(/^[^\s@]+@[^\s@]+$/) ? validData.push(Email) : invalidData.push('Email');
    this.validateCpf(Cpf) ? validData.push(Cpf) : invalidData.push('Cpf');
    Endereço.trim() !== '' ? validData.push(Endereço) : invalidData.push('Endereço');
    Cidade.trim() !== '' ? validData.push(Cidade) : invalidData.push('Cidade');
    Estado.trim() !== '' ? validData.push(Estado) : invalidData.push('Estado');
    Moradia.trim() !== '' ? validData.push(Moradia) : invalidData.push('Moradia');
    Resumo.trim() !== '' ? validData.push(Resumo) : invalidData.push('Resumo do currículo');
    Cargo.trim() !== '' ? validData.push(Cargo) : invalidData.push('Cargo');

    if (invalidData.length === 0) {
      this.setState(() => ({ actualData: validData}), this.showCurriculum());
    } else {
      if (invalidData.length === 1) alert(`Dados inválidos no campo: ${invalidData[0]}`)
      else alert(`Dados inválidos nos seguintes campos: ${invalidData.join(', ')}.`);
    }
  }

  handleOnMouseEnter() {
    if (!this.state.hasTriggered) {
      alert('Preencha com cuidado esta informação.');
    }
    this.setState({ hasTriggered: true });
  }
  
  handleCityInput({ target }) {
    let { name, value } = target;
    if (value.match(/^\d/)) value = '';

    this.setState({ [name]: value });
  }

  handleUserInput({ target }) {
    const { name, type } = target;
    let value;
    switch(name) {
      case 'Nome':
        value = target.value.toUpperCase();
        target.value = value;
        break;
      case 'Endereço':
        value = target.value.replace(/[^a-zA-ZÀ-ü ,.;]/g, '');
        target.value = value;
        break;
      default:
        value = type === 'checkbox' ? target.checked : target.value;
        break;
    }
    this.setState(() => ({ [name]: value }));
  }

  render() {
    return (
      <div>
        <form className="form">
          <h2>Formulário</h2>
          <fieldset>
            <CreateInput
              name="Nome"
              handleUserInput={this.handleUserInput}
              maxLength={40}
              value={this.state.Nome}
            />
            <CreateInput
              name="Email"
              handleUserInput={this.handleUserInput}
              maxLength={50}
              value={this.state.Email}
            />
            <CreateInput
              name="Cpf"
              maxLength={11}
              handleUserInput={this.handleUserInput}
              value={this.state.Cpf}
            />
            <CreateInput
              name="Endereço"
              maxLength={200}
              handleUserInput={this.handleUserInput}
              value={this.state.Endereço}
            />
            <CreateCityInput
              name="Cidade"
              handleUserInput={this.handleUserInput}
              handleCityInput={this.handleCityInput}
              maxLength={28}
              value={this.state.Cidade}
            />
            <label>
              Estado*:
              <select name="Estado" value={this.state.Estado} onChange={this.handleUserInput}>
                <option value=""></option>
                {
                this.state.estados.map((estado) => (
                  <option
                    key={estado}
                    value={estado}
                  >{estado}</option>))
                }
              </select>
            </label>
            <label>
              Moradia*:
              <label className="radioButtons">
                <input onChange={this.handleUserInput} type="radio" name="Moradia" value="Casa" checked={this.state.Moradia === 'Casa'} />Casa
              </label>
              <label className="radioButtons">
                <input onChange={this.handleUserInput} type="radio" name="Moradia" value="Apartamento" checked={this.state.Moradia === 'Apartamento'} />Apartamento
              </label>
            </label>
          </fieldset>
          <fieldset>
            <CreateTextarea
              name="Resumo"
              description="Resumo do currículo"
              handleUserInput={this.handleUserInput}
              maxLength={1000}
              value={this.state.Resumo}
              />
            <CreateTextarea
              name="Cargo"
              handleUserInput={this.handleUserInput}
              handleOnMouseEnter={this.handleOnMouseEnter}
              maxLength={40}
              value={this.state.Cargo}
            />
          </fieldset>
          <p>Campos marcados com '*' são obrigatórios</p>
          <button type="submit" onClick={this.handleSubmit} >Enviar</button>
          <button type="reset" onClick={this.handleReset} >Limpar</button>
        </form>
        { this.state.Curriculum ? <CreateCurriculum getValues={this.getValues} /> : null}
      </div>
    )
  }
}
