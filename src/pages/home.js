import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './home.css'

export const Home = () => {
    
    return(
        <body>
            <h1 align="center">PostSite</h1>
            <p align="center">My website using React, by David Elizondo Ramos.</p>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Username</h5>
                    <h6 class="card-subtitle mb-2 text-muted">publish date</h6>
                    <br/>
                    <p class="card-text">Text publish: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Username</h5>
                    <h6 class="card-subtitle mb-2 text-muted">publish date</h6>
                    <br/>
                    <p class="card-text">Text publish: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   
                </div>
            </div>
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