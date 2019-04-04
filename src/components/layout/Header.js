import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
   return (
      <div className="navbar bg-primary">
         <div className="navbar-content" style={navbarStyle}>
            <div className="navbar-left">
               <h1 className="m-0">Todo List</h1>
            </div>
            <div className="navbar-right">
               <ul className="menu">
                  <li className="menu-item">
                     <Link to="/">Home</Link>
                  </li>
                  <li className="menu-item">
                     <Link to="/about">About</Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

const navbarStyle = {
   color: 'white',
}

export default Header;