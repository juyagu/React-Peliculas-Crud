import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Crud from './componentes/Crud';

function App() {
  return (
    <div className="App">
      <Header />
      <Crud />
    </div>
  );
}

export default App;
