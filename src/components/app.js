import React, { Component } from "react";
import '../style.css';
import Todos from "../components/Todos"

class App extends Component {
   state = {
      todos: [
         {
            id: 1,
            title: 'Take out the trash',
            completed: false
         },
         {
            id: 2,
            title: 'Walk the dogs',
            completed: false
         },
         {
            id: 3,
            title: 'Do the dishes',
            completed: false
         }
      ]
   }

   getCheckboxState = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
         if (todo.id === id) {
            todo.completed = !todo.completed
         }

         return todo;
      })})
   }

   render() {
      return (
         <div>
            <div id="content">
               <Todos todos={this.state.todos} getCheckboxState={this.getCheckboxState}/>
            </div>
         </div>
      )
   }
}

export default App;