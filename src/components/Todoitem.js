import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
   getStyle = () => ({
     textDecoration: this.props.todo.completed ? 'line-through' : 'none',
     backgroundColor: this.props.todo.completed ? '#f3f3f3' : 'inherit',
   })

   render() {
     const { id, title } = this.props.todo;
     return (
       <li className="collection-item position-relative" style={this.getStyle()}>
          <input type="checkbox" id={id} checked={!!this.props.todo.completed} onChange={this.props.getCheckboxState.bind(this, id)} />
          {title}
          <div style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</div>
        </li>
     );
   }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const btnStyle = {
  position: 'absolute',
  top: 'calc(50% - 12px)',
  textAlign: 'center',
  lineHeight: '22px',
  right: '10px',
  height: '24px',
  width: '24px',
  background: 'rgba(255, 0, 0, 0.6)',
  borderRadius: '50%',
  color: 'white',
};

export default TodoItem;
