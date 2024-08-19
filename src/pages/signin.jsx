import React from "react";
import './signin.css';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link } from "react-router-dom";

export const Signin = () => {
    return (
        <div className='background'>
            <div className='wrapper'>
                <div className='form-box login'>
                    <form action=''>
                        <h1>Login</h1>
                        <div className='input-box'>
                            <input type='text' placeholder='Email/Username' required/>
                            <FaUser className='icons'/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Password' required/>
                            <FaLock className='icons'/>
                        </div>
                        <div className='remember'>
                            <label>
                                <input type='checkbox'/>
                                Remember me
                            </label>
                            <Link to="/register">Forgot Password?</Link>
                        </div>
                        <button type='submit'>Login</button>
                        <div className='register'> 
                            <Link to="/register">Don't have an account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>  
    )
};