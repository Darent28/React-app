import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';

export const LogIn = () => {
    
    return(
        <body className='top'>
            <h1 align="center">Ps</h1>
            <p align="center">Log in to PostSite</p>
            <form action="http://localhost:5000/login" method="GET" align="center" class= "login">
         
                <div class="form-group">
                    <label for="username">
                        Username:
                        <input type="text" class="form-control" name="name" aria-describedby="name" required/>
                    </label>
                </div>
                <div class="form-group ">
                    <label for="password">
                        Password: 
                        <input type="password" class="form-control" name="password" aria-describedby="password" required/>
                    </label>
                   
                </div>
                <button type="submit" class="btn btn-secondary">Log in</button>
            </form>
            <p class="account">New to PostSite? <a class="forgot" href="./sign-in">Create account</a>.</p>
        </body> 
    )
}

export default LogIn