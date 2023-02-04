import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './login.css';

export const LogIn = () => {
    
    return(
        <body>
           
            <form align="center" class= "login">
            <h1 align="center">LogIn</h1>
            <p align="center">This Is LogIn site</p>
                <div class="form-group">
                    <label for="username">
                        Username:
                        <input type="text" class="form-control" name="name" aria-describedby="username" />
                    </label>
                </div>
                <div class="form-group">
                    <label for="password">
                        Password:
                        <input type="password" class="form-control" name="password" aria-describedby="username" />
                    </label>
                </div>
                <br />
                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>

        </body> 
    )
}

export default LogIn