import React from 'react';

function Header () {
   return (
      <header style={headerStyle}>
         <h1 className="m-0">Todo List</h1>
      </header>
   )
}

const headerStyle = {
   padding: "15px",
   background: "var(--primary)",
   color: "white",
   margin: "0px 0px 30px 0px",
   textAlign: "center"
}

export default Header;