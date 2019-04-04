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
         <div className="container mt-3">
            <form onSubmit={this.addTodo} className="mb-1">
               <div className="input-group">
                  <label><h4 className="mb-0">Add Todo</h4></label>
                  <input type="text" className="full-width" placeholder="Add todo..." name="title" value={this.state.title} onChange={this.onChange}/>
               </div>
               <input className="success full-width button" type="submit" value="Add Todo" />
             </form>
         </div>
      )
   }
}

export default AddTodo;
