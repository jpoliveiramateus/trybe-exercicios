import React from "react";
import "./App.css";
import estados from "./estados";

class App extends React.Component {
  state = {
    nome: "",
    email: "",
    cpf: "",
    endereco: "",
    cidade: "",
    estado: "Acre",
    tipo: "off",
    clicado: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  removeEvent = () => {
    const { clicado } = this.state;
    if(clicado) {
      window.alert('Preencha com cuidado esta informação!');
      this.setState({
        clicado: false,
      });
    }
  }

  checkCity = () => {
    const { cidade } = this.state;
    const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    nums.forEach((num) => {
      if (cidade.startsWith(num)) {
        this.setState({
          cidade: '',
        });
      }
    });
  }

  validationEmail = (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/img;
    const { email } = this.state;
    if(regex.test(email) === false) {
      window.alert('Email inválido!')
    }
  }

  render() {
    return (
      <div className="App">
        <form>
          <h1>Cadastro de Currículo</h1>
          <fieldset className="first">
            <div>
              <label>
                Nome:
                <input
                  name="nome"
                  type="text"
                  maxLength={40}
                  value={this.state.nome.toLocaleUpperCase()}
                  onChange={this.handleChange}
                  required
                ></input>
              </label>

              <label>
                Email:
                <input
                  name="email"
                  type="email"
                  maxLength={50}
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                ></input>
              </label>
            </div>

            <div>
              <label>
                CPF:
                <input
                  name="cpf"
                  type="text"
                  maxLength={11}
                  value={this.state.cpf}
                  onChange={this.handleChange}
                  required
                ></input>
              </label>

              <label>
                Endereço:
                <input
                  name="endereco"
                  type="text"
                  maxLength={200}
                  value={this.state.endereco.replace(/[^\w\s]/gi, '')}
                  onChange={this.handleChange}
                  required
                ></input>
              </label>
            </div>

            <div>
              <label>
                Cidade:
                <input
                  name="cidade"
                  type="text"
                  maxLength={28}
                  value={this.state.cidade}
                  onChange={this.handleChange}
                  onBlur={this.checkCity}
                  required
                ></input>
              </label>

              <label style={{ marginRight: 50 }}>
              Estado:
              <select name="estado" onChange={this.handleChange} required>
                {estados.map((estado) => (
                  <option key={estado}>{estado}</option>
                ))}
              </select>
            </label>
            </div>
  
            <div>
              <label>
                Casa
                <input
                  name="tipo"
                  onChange={this.handleChange}
                  type="radio"
                  required
                ></input>
              </label>

              <label>
                Apartamento
                <input
                  name="tipo"
                  onChange={this.handleChange}
                  type="radio"
                ></input>
              </label>
            </div>
          </fieldset>
          <fieldset className="second">
            <textarea placeholder="Resumo do currículo" maxLength={1000} required></textarea>

            <textarea placeholder="Cargo" maxLength={40} onMouseEnter={this.removeEvent} required></textarea>

            <textarea placeholder="Descrição do cargo" maxLength={500} required></textarea>
          </fieldset>

          <button style={{ backgroundColor: "green", margin: 5 }} onClick={this.validationEmail} type="submit">
            Enviar
          </button>
          <button type="reset">Limpar</button>
        </form>
      </div>
    );
  }
}

export default App;
