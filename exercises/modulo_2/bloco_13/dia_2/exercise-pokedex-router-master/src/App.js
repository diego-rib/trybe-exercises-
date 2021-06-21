import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './styles/App.css';
import PokedexApp from './PokedexApp'

export default function App() {
  return (
    <BrowserRouter>
      <PokedexApp />
    </BrowserRouter>
  );
}
