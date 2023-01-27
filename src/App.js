import React, { useEffect, useState } from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect ( () => { 
    fetch("/api").then(
      response => response.json()
    ).then(
      data => { 
        setBackendData(data)
      }
    )
  }, []) 

  return (
    <div>
    {(typeof backendData.users === 'undefined') ? (
      <p>No connection 0_0</p>
    ): (
      backendData.users.map((user, i) => (
        //<p key={i}>{user}</p>
        <h1>Web page</h1>

      ))
    ) }

    </div>
  );
}

export default App;
