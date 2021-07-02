import { createRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUpClient } from '../actions';

function Cadastro (props) {

  let nameInput = createRef();
  let emailInput = createRef();
  let ageInput = createRef();

  const signUp = () => {
    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const age = ageInput.current.value;

    props.signUp({ name, email, age });
  }

  return (
    <>
      {!props.authenticated ? (
        <>
          <Link to="/">Voltar</Link>
          <h1>Login não efetuado</h1>
        </>
      ) : (
        <div>
          <Link className="nav-link" to="/">Voltar</Link>
          <Link className="nav-link" to="/clientes">Clientes</Link>
          <form>
            <label>
              <input ref={nameInput} type="text" placeholder="Nome"/>
            </label>
            <label>
              <input ref={emailInput} type="email" placeholder="Email"/>
            </label>
            <label>
              <input ref={ageInput} type="text" placeholder="Idade"/>
            </label>
            <button type="button" onClick={ signUp }>
              Enviar
            </button>
          </form>
        </div>
        )
      }
    </>
  );
}

const mapStateToProps = (state) => ({
  authenticated: state.login.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (client) => dispatch(signUpClient(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
