import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
   getStyle = () => {
      return {
         textDecoration: this.props.todo.completed ? 'line-through' : 'none',
         backgroundColor: this.props.todo.completed ? '#f3f3f3': 'inherit'
      }
   }

   render() {
      const { id, title  } = this.props.todo;
      return (
         <li className="collection-item" style={this.getStyle()}>
               <input type="checkbox" id={id} onChange={this.props.getCheckboxState.bind(this, id)}/>
               <label className="display-inline" for={id}><p className="m-0 display-inline">{title}</p></label>
         </li>
      )
   }
}

TodoItem.propTypes = {
   todo: PropTypes.object.isRequired
}

export default TodoItem
