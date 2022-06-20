import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.PureComponent {
  render() {
    return (
      <>
        <h1>Welcome!</h1>
        <Link to="/login">Login</Link>
      </>
    );
  }
}

export default Home;
