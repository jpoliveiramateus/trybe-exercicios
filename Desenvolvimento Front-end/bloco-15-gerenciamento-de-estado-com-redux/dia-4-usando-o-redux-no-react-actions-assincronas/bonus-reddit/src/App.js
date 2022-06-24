import React from 'react';
import { connect } from 'react-redux';
import { fetchReddit } from './actions';
import './App.css';

class App extends React.Component {
  state = {
    select: 'frontend',
    button: true,
  }

  componentDidMount() {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const todayString = today.toUTCString();
    this.setState({ date: todayString });
    const { fetchReddit } = this.props;
    const { select } = this.state;
    fetchReddit(select);
  }

  fetchRedditSelected = () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const todayString = today.toUTCString();
    this.setState({ date: todayString });
    const { fetchReddit } = this.props;
    const { select } = this.state;
    fetchReddit(select);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, this.fetchRedditSelected);
  }

  render() {
    const { loading, data } = this.props;
    const { select, date } = this.state;
    return (
      <div className="App">
        <h2>Selected: frontend</h2>
        <select name="select" id="select" onChange={ this.handleChange } value={select}>
          <option>frontend</option>
          <option>reactjs</option>
        </select>
        <br />
        <br />
        <button type="button" disabled={ loading } onClick={ this.handleChange }>Refresh</button>
        <span>{date}</span>
        {loading ? (<h3>Carregando...</h3>) : (
          <ul style={{ textAlign: 'start' }}>
          {data.length > 0 && data.map((info) => {
            const { title, id } = info.data;
            return (
              <li key={ id }>{title}</li>
            )
          })}
        </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.reddit.data,
  loading: state.reddit.isLoading,
  error: state.reddit.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchReddit: (name) => dispatch(fetchReddit(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
