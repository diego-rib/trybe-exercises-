import { createRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../styles/Login.css';

import { loginUser } from '../actions';

function Login ({ clients, tryLogin }) {
  let usernameInput = createRef();
  let passwordInput = createRef();

  const [logged, setLogged] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const login = () => {
    const username = usernameInput.current.value;
    const password = passwordInput.current.value;

    const clientsUsers = Object.keys(clients);

    if (clientsUsers.includes(username)) {
      if (clients[username] === password) {
        tryLogin();
        setLogged(true);
      } else {
        alert('Senha incorreta');
      }
    } else {
      setSignUp(true);
    }
  }

  return (
    <>
      { logged ? <Redirect to="/clientes"/> : null }
      { signUp ? <Redirect to="/cadastro"/> : null }
      <div className="login-form">
        <div>
          <Link className="nav-link" to="/">Voltar</Link>
        </div>
        <label>
          Usuário:
          <input ref={usernameInput} type="text" placeholder="Insira seu nome de usuário" />
        </label>
        <label>
          Senha:
          <input ref={passwordInput} type="password" placeholder="Insira sua senha" />
        </label>
        <button onClick={() => login()} type="button">Entrar</button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  clients: state.login.logins,
});

const mapDispatchToProps = (dispatch) => ({
  tryLogin: () => dispatch(loginUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
