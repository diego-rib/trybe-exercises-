import { Component } from 'react';
import 'bulma/css/bulma.css';
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
  DescriçãoDoCargo: '',
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
    const { Nome, Email, Cpf, Endereço, Cidade, Estado, Moradia, Resumo, Cargo, DescriçãoDoCargo } = this.state;
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
    DescriçãoDoCargo.trim() !== '' ? validData.push(DescriçãoDoCargo) : invalidData.push('Descrição Do Cargo');

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
          <h2 className="title is-3 has-text-centered is-spaced titleForm">Formulário</h2>
          <div>
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
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">Estado*:</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <select className="select is-normal" name="Estado" value={this.state.Estado} onChange={this.handleUserInput}>
                      <option value="">Selecione seu estado</option>
                      {
                      this.state.estados.map((estado) => (
                        <option
                          key={estado}
                          value={estado}
                        >{estado}</option>))
                      }
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label">
                  Moradia*:
                </label>
              </div>
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <label className="radio">
                      <input onChange={this.handleUserInput} type="radio" name="Moradia" value="Casa" checked={this.state.Moradia === 'Casa'} />Casa
                    </label>
                    <label className="radio">
                      <input onChange={this.handleUserInput} type="radio" name="Moradia" value="Apartamento" checked={this.state.Moradia === 'Apartamento'} />Apartamento
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <CreateTextarea
              name="Resumo"
              description="Resumo do currículo"
              handleUserInput={this.handleUserInput}
              maxLength={1000}
              value={this.state.Resumo}
              />
            <CreateInput
              name="Cargo"
              handleUserInput={this.handleUserInput}
              handleOnMouseEnter={this.handleOnMouseEnter}
              maxLength={40}
              value={this.state.Cargo}
            />
            <CreateTextarea
              name="DescriçãoDoCargo"
              description="Descrição do cargo"
              handleUserInput={this.handleUserInput}
              maxLength={500}
              value={this.state.DescriçãoDoCargo}
            />
          </div>
          <div className="field is-horizontal">
            <div className="field-label"></div>
            <div className="field-body">
              <div className="field">
                <p className="help has-text-weight-bold is-italic">Campos marcados com '*' são obrigatórios</p>
              </div>
            </div>
          </div>
          <div className="buttons is-grouped is-centered">
            <div className="control">
              <button className="button is-primary" type="submit" onClick={this.handleSubmit} >Enviar</button>
            </div>
            <div className="control">
              <button className="button is-danger" type="reset" onClick={this.handleReset} >Limpar</button>
            </div>
          </div>
        </form>
        { this.state.Curriculum ? <CreateCurriculum getValues={this.getValues} /> : null}
      </div>
    )
  }
}
