/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import '../style.css';
import PropTypes from 'prop-types';
import TodoItem from './Todoitem';

class Todos extends Component {
  render() {
    return (
      <ul className="collection spaced">
        {
          this.props.todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} getCheckboxState={this.props.getCheckboxState} deleteTodo={this.props.deleteTodo} />
          ))
        }
      </ul>
    );
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
