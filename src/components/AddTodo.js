import React, { Component } from 'react'

class AddTodo extends Component {
   state = {
      title: ``
   }

   onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
   }

   addTodo = (e) => {
      e.preventDefault();
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
   }

   render() {
      return (
         <div className="container">
            <form onSubmit={this.addTodo}>
               <div className="input-group">
                  <label>Add Todo</label>
                  <input type="text" className="full-width" placeholder="Add todo..." name="title" value={this.state.title} onChange={this.onChange}/>
               </div>
               <input className="success full-width button" type="submit" value="Add Todo" />
            </form>
         </div>
      )
   }
}

export default AddTodo;
