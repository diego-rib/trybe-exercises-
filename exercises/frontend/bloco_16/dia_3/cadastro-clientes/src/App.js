import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Clientes from './pages/Clientes';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/clientes" component={ Clientes } />
          <Route path="/cadastro" component={ Cadastro } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
