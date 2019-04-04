import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../style.css';
import Todos from "./Todos";
import Header from './layout/Header';
import AddTodo from './AddTodo';
import About from './layout/About';

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
         <Router>
            <div>
               <Header />
               <Route exact path="/" render={props => (
                  <React.Fragment>
                     <AddTodo addTodo={this.addTodo}/>
                     <div  className="container">
                        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} getCheckboxState={this.getCheckboxState}/>
                     </div>
                     
                  </React.Fragment>
               )} />
               <Route path="/about" component={About} />
            </div>
         </Router>  
      )
   }
}

export default App;