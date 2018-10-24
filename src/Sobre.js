import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

class Sobre extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Página de Sobre
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Exemplo de Página de Sobre
          </a>
        </header>
      </div>
    );
  }
}

export default Sobre;
