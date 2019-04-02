import React, { Component } from "react";
import '../style.css'

class Todos extends Component {
   render() {
      return (
         <ul className="collection">
            {
               this.props.todos.map((todo) => (
                  <li className="collection-item">
                     <h5 className="m-0">{ todo.title }</h5>
                  </li>
               ))
            }
         </ul>
      )
      
   }
}

export default Todos;