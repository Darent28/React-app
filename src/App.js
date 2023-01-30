import Home from "./pages/home";
import HeaderPs from "./pages/header";
import React, { useEffect, useState } from 'react';


function App() {

  return (
    <body>

        <HeaderPs />

        <Home />

    </body>
   
    // <div>
    // {
    // (typeof backendData.user === 'undefined') ? (
    //   <p>No connection 0_0</p>
    // ): (
    //   backendData.user.map((user, i) => (
    //     <p key={i}>{user}</p>
        

    //   ))
    // ) }
    // </div>
  );
}

export default App;
