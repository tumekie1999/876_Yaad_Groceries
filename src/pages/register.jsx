import React from "react";
import './register.css';
import { Link } from "react-router-dom";

export const Register = () => {
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
                            <Link to="/signin">Already have an account?</Link>   
                        </div>
                    </form>
                </div>
            </div>
        </div>   
    )
};