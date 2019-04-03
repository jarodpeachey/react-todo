import React, { Component } from "react";
import '../style.css';
import Todos from "./Todos";
import Header from '../layout/Header';
import AddTodo from './AddTodo';

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

   deleteTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
   }

   addTodo = (title) => {
      const newTodo = {
         id: this.state.todos.slice(-1)[0].id + 1,
         title,
         completed: false
      }
      this.setState({ todos: [...this.state.todos, newTodo] })
   }

   render() {
      return (
         <div>
            <Header />
            <AddTodo addTodo={this.addTodo}/>
            <div className="container">
               <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} getCheckboxState={this.getCheckboxState}/>
            </div>
         </div>
      )
   }
}

export default App;