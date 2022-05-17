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
    tipo: "",
    clicado: true,
    cargo: '',
    descCargo: '',
    resumo: '',
    validation: false,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    if (target.type === "radio") value = target.parentNode.textContent;
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

  validation = (e) => {
    e.preventDefault();
    const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/img;
    const { cidade, cpf, email, endereco, estado, nome, cargo, descCargo, resumo, tipo } = this.state;
    if (cidade && cpf && email && endereco && estado && nome && cargo && descCargo && resumo && tipo ) {
      if (regexEmail.test(email) === true) {
        this.setState({
          validation: true,
        })
      } else {
        window.alert('Email inválido!');
      }
    } else {
      window.alert('Preencha todos os dados!');
    }
  }

  result = () => {
    const { cidade, cpf, email, endereco, estado, nome, cargo, descCargo, resumo, tipo } = this.state;
    return (
      <div className="result">
        <p>{nome}</p>
        <p>{email}</p>
        <p>{cpf}</p>
        <span>{cidade}</span>
        <span>{endereco.replace(/[^\w\s]/gi, '')}</span>
        <span>{tipo}</span>
        <p>{estado}</p>
        <p>{resumo}</p>
        <p>{cargo}</p>
        <p>{descCargo}</p>
      </div>
    )
  }
  
  cleanForm = () => {
    this.setState({
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      estado: "Acre",
      tipo: "off",
      clicado: true,
      cargo: '',
      descCargo: '',
      resumo: '',
      validation: false,
    });
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
            <textarea placeholder="Resumo do currículo" value={this.state.resumo} name="resumo" maxLength={1000} onChange={ this.handleChange } required></textarea>

            <textarea placeholder="Cargo" maxLength={40} name="cargo" value={this.state.cargo} onMouseEnter={this.removeEvent} onChange={ this.handleChange } required></textarea>

            <textarea placeholder="Descrição do cargo" name="descCargo" maxLength={500} value={this.state.descCargo} onChange={ this.handleChange } required></textarea>
          </fieldset>

          <button style={{ backgroundColor: "green", margin: 5 }} onClick={this.validation} type="submit">
            Enviar
          </button>
          <button type="reset" onClick={ this.cleanForm } >Limpar</button>
        </form>
        {this.state.validation && this.result()}
      </div>
    );
  }
}

export default App;
