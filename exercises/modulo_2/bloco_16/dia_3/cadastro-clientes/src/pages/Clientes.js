import { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { removeClient } from '../actions';

function Clientes (props) {

  let list = [...props.clients];
  const [ordered, setOrdered] = useState(false);

  list.sort((a, b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
  });

  const alphabeticalOrder = () => {
    if (ordered) setOrdered(false);
    else setOrdered(true);
  }

  const removeClientFromList = (client) => {
    props.remove(client);
  }

  const renderListOfClients = (clients) => (
    <>
      {
        clients.map((client, index) => (
          <div key={ index }>
            <button onClick={() => removeClientFromList(client) }>X</button>
            <p>Nome: {client.name}</p>
            <p>Idade: {client.age}</p>
            <p>Email: {client.email}</p>
          </div>
        ))
      }
    </>
  );

  return (
    <>
      {console.log(list)}
      <Link className="nav-link" to="/">Voltar</Link>
      <Link className="nav-link" to="/cadastro">Registrar novo cliente</Link>
      {props.authenticated ? (
        list.length === 0 ? (
          <div>
            <h1>Não há nenhum cliente</h1>
          </div>
        ) : (
          <div>
            <button onClick={ alphabeticalOrder } >Ordenha</button>
            {
              ordered ? (
                renderListOfClients(list)
              )
              : (
                renderListOfClients(props.clients)
              )
            }
          </div>
        )
      )
      : (
        <>
          <Link to="/">Voltar</Link>
          <h1>Login não efetuado</h1>
        </>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.login.authenticated,
  clients: state.clients.clients,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (client) => dispatch(removeClient(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Clientes);
