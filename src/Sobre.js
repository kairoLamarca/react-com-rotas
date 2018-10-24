import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';

class Sobre extends Component {
  constructor(props) {
    super(props);

    this.state = { teste: '1234', value: 'hhhh' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.setState({ value: event.target.value });
  }

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
            Exemplo de Página de Sobre {this.state.teste}
          </a>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <p>
              Value: {this.state.value}
            </p>
        </header>
      </div>
    );
  }
}

export default Sobre;
