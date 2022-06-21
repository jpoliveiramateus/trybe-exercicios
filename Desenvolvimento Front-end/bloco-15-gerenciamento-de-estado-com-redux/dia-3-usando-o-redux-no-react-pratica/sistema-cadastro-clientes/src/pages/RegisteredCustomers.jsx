/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { objectOf, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { notOrderName, orderName, removeClient } from '../redux/actions';

class RegisteredCustomers extends React.PureComponent {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    loading: false,
    order: false,
  };

  client = ({ target }) => {
    const { remove } = this.props;
    const clientRemove = target
      .parentNode.parentNode.firstChild.childNodes[1].textContent;
    remove(clientRemove);
  };

  render() {
    const {
      login, registered, orderNameArray, notOrder,
    } = this.props;
    const { client } = this;
    const { loading, order } = this.state;
    if (loading) {
      return (<p>Carregando..</p>);
    }
    return (
      <div>
        {login.email === '' || login.password === '' ? <h1>Login não efetuado!</h1> : (
          <>
            <h1>Customer Base</h1>
            {registered.length > 0 && (
            <button
              type="button"
              onClick={async () => {
                if (order) {
                  this.setState({
                    loading: true,
                  });
                  await notOrder();
                  this.setState({
                    loading: false,
                    order: !order,
                  });
                } else {
                  this.setState({
                    loading: true,
                  });
                  await orderNameArray();
                  this.setState({
                    loading: false,
                    order: !order,
                  });
                }
              }}
            >
              Ordenar
            </button>
            )}
            {registered.length ? registered.map((info) => {
              const { name, email, age } = info;
              return (
                <div
                  key={email}
                  style={{
                    display: 'flex', border: '2px solid black', margin: 10,
                  }}
                >
                  <div>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{age}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={client}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            }) : (<h2>Nenhum cliente cadastrado</h2>)}
            <Link to="/registration">Register</Link>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.reducerLogin,
  registered: state.reducerRegister,
});

const mapDispatchToProps = (dispatch) => ({
  remove: (state) => dispatch(removeClient(state)),
  orderNameArray: (state) => dispatch(orderName(state)),
  notOrder: (state) => dispatch(notOrderName(state)),
});

RegisteredCustomers.propTypes = {
  login: PropTypes.objectOf(string),
  registered: PropTypes.arrayOf(objectOf(string)),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredCustomers);
