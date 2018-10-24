import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import axios from 'axios';

class Sobre extends Component {
  constructor(props) {
    super(props);

    this.state = { teste: '1234', value: 'hhhh', resultado: [] };

    this.handleChange = this.handleChange.bind(this);
    this.getTesteFetch = this.getTesteFetch.bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.setState({ value: event.target.value });
  }

  getTesteFetch() {
    fetch("http://localhost:4000/mysql")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  getTesteAxios = async () => {
    try {
      const response = await axios.get('http://localhost:4000/mysql');
      console.log(response.data);
      this.setState({resultado: response.data});

      console.log('state: ', this.state.resultado);
    } catch (error) {
      //console.error(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <header className="App-header">
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

          <button onClick={this.getTesteFetch}>Buscar API Fetch</button>
          <button onClick={this.getTesteAxios}>Buscar API Axios</button>
          <p>
            {/* Resultado: {this.state.resultado[0].nome} */}
          </p>
        </header>
      </div>
    );
  }
}

export default Sobre;
