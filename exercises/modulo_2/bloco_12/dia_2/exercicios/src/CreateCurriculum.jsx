import { Component } from 'react'

export default class CreateCurriculum extends Component {
  render() {
    const infoCurriculum = this.props.getValues();
    const names = [ 'Nome', 'Email', 'Cpf', 'Endereço', 'Cidade', 'Estado', 'Moradia', 'Resumo', 'Cargo' ];
    return (
      <div className="curriculum">
        {infoCurriculum.map((info, index) => <p key={names[index]}>{names[index]}: {info}</p>)}
      </div>
    )
  }
}
