import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logIn } from '../redux/actions';

class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.type]: target.value,
    });
  }

  render() {
    const { password, email } = this.state;
    const { handleChange } = this;
    const { login } = this.props;
    return (
      <div>
        <h1>Login</h1>
        <input
          type="email"
          onChange={handleChange}
          value={email}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={handleChange}
          value={password}
          name="password"
          id="password"
          placeholder="Senha"
        />
        <Link to="/registered" onClick={() => login({ email, password })}>Clients</Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(logIn(state)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
