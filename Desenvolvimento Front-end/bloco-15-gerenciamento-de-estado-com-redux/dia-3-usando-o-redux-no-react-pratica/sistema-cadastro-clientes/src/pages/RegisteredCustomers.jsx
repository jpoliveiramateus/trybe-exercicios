import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { objectOf, string } from 'prop-types';
import { Link } from 'react-router-dom';

class RegisteredCustomers extends React.PureComponent {
  render() {
    const { login, registered } = this.props;
    return (
      <div>
        {login.email === '' || login.password === '' ? <h1>Login não efetuado!</h1> : (
          <>
            <h1>Customer Base</h1>
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
                    <button type="button">X</button>
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

RegisteredCustomers.propTypes = {
  login: PropTypes.objectOf(string),
  registered: PropTypes.arrayOf(objectOf(string)),
}.isRequired;

export default connect(mapStateToProps, null)(RegisteredCustomers);
