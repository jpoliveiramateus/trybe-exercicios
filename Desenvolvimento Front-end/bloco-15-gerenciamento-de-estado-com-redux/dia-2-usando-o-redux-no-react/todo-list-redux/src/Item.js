import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { stateButton } from './redux/actions';

class Item extends React.Component {
  render() {
    const { content, removeTodo, button, buttonState } = this.props;
    return (
      <div className="Item">
        {content}
        <button
          type="button"
          onClick={ () => buttonState(button) }
        >
          Selecionar
        </button>
        <button
          type="button"
          disabled={ button }
          onClick={ () => removeTodo(content) }
        >
          Remover
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  buttonState: (state) => dispatch(stateButton(state)),
});

const mapStateToProps = (state) => ({
  button: state.removeButtonReducer,
});

Item.propTypes = {
  content: PropTypes.string,
  removeTodo: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Item);
