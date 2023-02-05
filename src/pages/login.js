import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';
import { Link } from 'react-router-dom';

export const LogIn = () => {
    
    return(
        <body className='top'>
            <h1 align="center">Ps</h1>
            <p align="center">Log in to PostSite</p>
            <form align="center" class= "login">
         
                <div className='inputs'>
                <div class="form-group">
                    <label for="username">
                        Username:
                        <input type="text" class="form-control" name="name" aria-describedby="username" />
                    </label>
                </div>
                <div class="form-group ">
                    <label for="password">
                        Password: 
                        <input type="password" class="form-control" name="password" aria-describedby="username" />
                    </label>
                   
                </div>
                <button type="submit" class="btn btn-secondary">Log in</button>
                </div>
            </form>
            <p class="account">New to PostSite? <a class="forgot" href="./sign-in">Create account</a>.</p>
        </body> 
    )
}

export default LogIn