/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../style.css';
import axios from 'axios';
import Todos from './Todos';
import Header from './layout/Header';
import AddTodo from './AddTodo';
import About from './layout/About';

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    axios.get('https://react-todo-api-file.herokuapp.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

   getCheckboxState = (id) => {
     let data;
     this.state.todos.map((todo) => {
       if (todo.id === id) {
         data = {
           id: todo.id,
           title: todo.title,
           completed: !todo.completed,
         };
       }
     });

     axios.put(`https://react-todo-api-file.herokuapp.com/todos/${id}`, data)
       .then(res => this.setState({
         todos: this.state.todos.map((todo) => {
           if (todo.id === id) {
             todo.completed = !todo.completed;
           }

           return todo;
         }),
       }));
   }

   deleteTodo = (id) => {
     axios.delete(`https://react-todo-api-file.herokuapp.com/todos/${id}`)
       .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
   }

   addTodo = (title) => {
     // const newTodo = {
     //    id: this.state.todos.slice(-1)[0].id + 1,
     //    title,
     //    completed: false
     // }
     const data = {
       title,
       completed: false,
     };

     axios.post('https://react-todo-api-file.herokuapp.com/todos', data)
       .then(res => this.setState({
         todos:
         [...this.state.todos, res.data],
       }));
   }

   render() {
     return (
       <Router>
          <div>
             <Header />
             <Route
                exact
                path="/"
                render={props => (
  <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <div className="container">
                       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} getCheckboxState={this.getCheckboxState} />
                     </div>

                  </React.Fragment>
)}
               />
             <Route path="/about" component={About} />
           </div>
        </Router>
     );
   }
}
