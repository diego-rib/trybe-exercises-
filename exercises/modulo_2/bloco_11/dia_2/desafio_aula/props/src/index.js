import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import Image from './Image';
import Users from './Users';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Users />
    <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" />
  </React.StrictMode>,
  document.getElementById('root')
);
