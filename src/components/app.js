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

   render() {
      console.log(this.state);
      return (
         <div>
            <div id="content">
               <Todos />
            </div>
         </div>
      )
   }
}

export default App;