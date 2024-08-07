
import React from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigate = useNavigate();
    return (
        <div className='background'>
            <div className='wrapper'>
                <div className='form-box register'>
                    <form action=''>
                        <h1>Create Account</h1>
                        <div className='input-box'>
                            <input type='text' placeholder='First and last name' required/>
                        </div>
                        <div className='input-box'>
                            <input type='text' placeholder='Email/Username' required/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Password' required/>
                        </div>
                        <button type='submit'>Register</button>
                        <div className='Login'>
                            <p>Already have an account?
                                <a href='#' onClick={() => navigate("/signin")}> Login</a>  
                            </p>   
                        </div>
                    </form>
                </div>
            </div>
        </div>   
    )   
};