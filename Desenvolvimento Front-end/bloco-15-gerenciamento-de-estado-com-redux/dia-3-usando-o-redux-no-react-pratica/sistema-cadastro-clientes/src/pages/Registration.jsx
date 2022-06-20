import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { register } from '../redux/actions';

class Registration extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      email: '',
      button: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendRegistration = this.sendRegistration.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const { name, age, email } = this.state;
      if (name && age && email) this.setState({ button: false });
      else this.setState({ button: true });
    });
  }

  sendRegistration() {
    const { registered } = this.props;
    const { name, age, email } = this.state;

    registered({ name, email, age });

    this.setState({
      name: '',
      age: '',
      email: '',
      button: true,
    });
  }

  render() {
    const { login } = this.props;
    const {
      name, age, email, button,
    } = this.state;
    const { handleChange, sendRegistration } = this;
    return (
      <div>
        {login.email === '' || login.password === '' ? <h1>Login não efetuado!</h1> : (
          <>
            <h1>Registration</h1>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={name}
            />
            <input
              type="number"
              name="age"
              id="age"
              onChange={handleChange}
              value={age}
            />
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={email}
            />
            <button
              type="button"
              disabled={button}
              onClick={sendRegistration}
            >
              Register
            </button>
            <div>
              <Link to="/registered">Customer Base</Link>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.reducerLogin,
});

const mapDispatchToProps = (dispatch) => ({
  registered: (state) => dispatch(register(state)),
});

Registration.propTypes = {
  login: PropTypes.objectOf(string).isRequired,
  registered: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
