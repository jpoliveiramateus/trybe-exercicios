import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputTodo from './InputTodo';
import Item from './Item';
import { addTodo, removeTodo } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    const { addTodoList } = this.props;
    addTodoList(todo);
  }

  removeTodo(todo) {
    const { removeTodoList } = this.props;
    removeTodoList(todo);
  }

  render() {
    const { listTodo } = this.props;
    return (
      <main className="App">
        <InputTodo addTodo={ (todo) => this.addTodo(todo) } />
        <ul>
          {listTodo.map((todo, index) => (
            <li key={ index + 1 }>
              <Item content={ todo } removeTodo={ this.removeTodo } />
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodoList: (state) => dispatch(addTodo(state)),
  removeTodoList: (state) => dispatch(removeTodo(state)),
});

const mapStateToProps = (state) => ({
  listTodo: state.todoListReducer,
});

App.propTypes = {
  addTodoList: PropTypes.func,
  removeTodoList: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(App);
