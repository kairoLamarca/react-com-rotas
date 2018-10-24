import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Style.css';
import { Link,  } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div className="menu">               
          <Link to="/">Ir para a página inicial</Link>
          <Link to="/sobre">Ir para a página sobre</Link>
      </div>
    );
  }
}

export default Menu;
