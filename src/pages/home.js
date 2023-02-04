import React from 'react'
import './home.css'

export const Home = () => {
    
    return(
        <body>
            <h1 align="center">PostSite</h1>
            <p align="center">My website using React, by David Elizondo Ramos.</p>
        </body> 
    )
}

export default Home


// const [backendData, setBackendData] = useState([{}])

// useEffect ( () => { 
//   fetch("/api").then(
//     response => response.json()
//   ).then(
//     data => { 
//       setBackendData(data)
//     }
//   )
// }, []) 

// return(

//     <div>
//         {
//         (typeof backendData.user === 'undefined') ? (
//         <p>No connection 0_0</p>
//         ): (
//         backendData.user.map((user, i) => (
//             <p key={i}>{user}</p>
            

//         ))
//         ) }
//     </div>
// )