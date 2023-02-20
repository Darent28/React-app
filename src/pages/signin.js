import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './signin.css';

export const SignIn = () => {
    
    const [input, setInput] = useState({
        name: '',
        password: '',
        confirmPassword: ''
    });

    const [error, setError] = useState({
        name: '',
        password: '',
        confirmPassword: ''
    })

    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
    }
   
    const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
        const stateObj = { ...prev, [name]: "" 
    }

    switch (name) {
        case "name":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["password_confirm"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["password_confirm"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "password_confirm":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }

    return(
        <body className='top'>
            
            <h1 align="center">Sign In</h1>
            <p align="center">This Is Sign In site</p>
            <form  action="http://localhost:5000/register" method="POST" align="center" class= "signin">
                <div class="form-group">
                    <label for="username">
                        Username:
                        <input 
                        type="text" 
                        class="form-control" 
                        name="name" 
                        value={input.name}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        required/>
                       
                    </label>
                    {error.name && <span className='err'>{error.name}</span>}
                </div>
                <div class="form-group ">
                    <label for="email">
                        Email: 
                        <input type="email" 
                        class="form-control" 
                        name="email" 
                        required/>
                    </label>
                    
                </div>
                <div class="form-group ">
                    <label for="password">
                        Password: 
                        <input 
                        type="password" 
                        class="form-control" 
                        name="password" 
                        value={input.password}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        required/>
                    </label>
                    {error.password && <span className='err'>{error.password}</span>}
                </div>
                <div class="form-group ">
                    <label for="password-confirm">
                        Password confirm: 
                        <input 
                        type="password" 
                        class="form-control" 
                        name="password_confirm" 
                        value={input.password_confirm}
                        onChange={onInputChange}
                        onBlur={validateInput}
                        required/>
                    </label>
                    {error.password_confirm && <span className='err'>{error.password_confirm}</span>}
                </div>
                <button type="submit" class="btn btn-secondary" value="Submit">Sign in</button>
            </form>
        </body> 
    )
}

export default SignIn