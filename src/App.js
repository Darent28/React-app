import HeaderPs from "./pages/header";
import Home from "./pages/home";
import LogIn from "./pages/login";
import SignIn from "./pages/singin";
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';




function App() {

  return (
    <body>
        <HeaderPs />
          <Routes>
              <Route path='/' element={  <Home />  } />
              <Route path='/log-in' element={ <LogIn />  } />
              <Route path='/sign-in' element={ <SignIn />  } />         
          </Routes>
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
