import pokemons from './data';
import './App.css';
import Pokemons from './Pokemon.jsx';

function App() {
  return (
    <div className="App">
      {pokemons.map((pokemon => <Pokemons key={pokemon.id} pokemon={pokemon} />))}
    </div>
  );
}

export default App;
