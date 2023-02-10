import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './signin.css';

export const SignIn = () => {
    
    const Alert = {}

    return(
        <body className='top'>
            <h1 align="center">Sign In</h1>
            <p align="center">This Is Sign In site</p>
            <form action="http://localhost:5000/register" method="POST" align="center" class= "signin">
                <div class='inputsRe'>
                <div class="form-group">
                    <label for="username">
                        Username:
                        <input type="text" class="form-control" name="name" required/>
                    </label>
                </div>
                <div class="form-group ">
                    <label for="email">
                        Email: 
                        <input type="email" class="form-control" name="email" required/>
                    </label>
                    
                </div>
                <div class="form-group ">
                    <label for="password">
                        Password: 
                        <input type="password" class="form-control" name="password" required/>
                    </label>
                    
                </div>
                <div class="form-group ">
                    <label for="password-confirm">
                        Password confirm: 
                        <input type="password" class="form-control" name="password_confirm" required/>
                    </label>
                    
                </div>
                <button type="submit" class="btn btn-secondary" value="Submit">Sign in</button>
                </div>
            </form>
        </body> 
    )
}

export default SignIn