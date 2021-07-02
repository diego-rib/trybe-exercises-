import { Link } from 'react-router-dom';

function Home () {
  return (
    <div>
      <h1>Faça o login para continuar</h1>
      <div>
        <Link className="nav-link" to="/login">LOGIN</Link>
      </div>
      <div style={ { marginTop: '30px' }}>
        <Link className="nav-link" to="/cadastro">CADASTRO</Link>
      </div>
    </div>
  )
}

export default Home;
