import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import axios from 'axios';
import ReactList from 'react-list';

class Sobre extends Component {
  constructor(props) {
    super(props);

    this.state = { teste: '1234', value: 'hhhh', resultado: [], id: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);
    this.getTesteFetch = this.getTesteFetch.bind(this);
    //this.putAxios = this.putAxios.bind(this);
    //this.getTesteAxios = this.getTesteAxios.bind(this);
    //this.renderItem = this.renderItem.bind(this);
    //this.delete = this.delete.bind(this);
  }

  handleChange(event) {
    //console.log(event);
    this.setState({ value: event.target.value });
  }

  handleChangeID(event) {
    this.setState({ id: event.target.value });
  }

  getTesteFetch() {
    fetch("http://localhost:4000/mysql")
      .then(res => res.json())
      .then(
        (result) => {
          //console.log(result);
        },
        (error) => {
          //console.log(error);
        }
      )
  }

  getTesteAxios = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/mysql/${this.state.id}`);
      //console.log(response.data);
      this.setState({ resultado: response.data });

      //console.log('state: ', this.state.resultado);
    } catch (error) {
      //console.error(error);
    }
  }

  putAxios(id) {
    try {
      console.log('teste', id);
    }
    catch (error) {
      //console.error(error);
    }
  }

  renderItem(index, key) {
    //console.log(this.state.resultado);
    return (
      <div key={key}>
        {this.state.resultado[index].nome}
        <button key={key} onClick={this.putAxios(this.state.resultado[index].id)}>
          Alterar {this.state.resultado[index].id}
        </button>
      </div>);
    //return <div key={key}>teste</div>;
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
          <input type="text" value={this.state.id} onChange={this.handleChangeID} />
          <button onClick={this.getTesteAxios}>Buscar API Axios</button>
          <div style={{ overflow: 'auto', maxHeight: 400 }}>
            {/* <ReactList
              itemRenderer={this.renderItem}
              length={this.state.resultado.length}
              type='uniform'
            /> */}
            <TodoList items={this.state.resultado} _handleDelete={this.delete.bind(this)} />
          </div>
        </header>
      </div>
    );
  }

  async delete(id) {          // How that function knows id of item that need to delete and how to delete item?
    //this.setState(this.item.id)

    console.log(id);

    await this.setState({ id: id });

    this.getTesteAxios();
  }
}

class TodoList extends Component {

  _handleDelete(id) {
    this.props._handleDelete(id);
  }

  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.nome}<button onClick={this._handleDelete.bind(this, item.id)}>Delete</button></li>
        ))}
      </ul>
    );
  }
}

export default Sobre;
